import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Formik} from 'formik';
import * as Yup from 'yup';

const styles = {};

const contactFormEndpoint = process.env.REACT_APP_CONTACT_ENDPOINT;

const Contact = () => {
    const [open, setOpen] = useState(false);
    const [isSubmitionCompleted, setSubmitionCompleted] = useState(false);

    function handleClose() {
        setOpen(false);
    }

    function handleClickOpen() {
        setSubmitionCompleted(false);
        setOpen(true);
    }

    return (
        <React.Fragment>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Contact us!
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                {!isSubmitionCompleted &&
                <React.Fragment>
                    <DialogTitle id="form-dialog-title">Contact</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Send us a comment!
                        </DialogContentText>
                        <Formik
                            initialValues={{email: '', name: '', comment: ''}}
                            onSubmit={(values, {setSubmitting}) => {
                                setSubmitting(true);
                                console.log(contactFormEndpoint,
                                    values,
                                    {
                                        headers: {
                                            'Access-Control-Allow-Origin': '*',
                                            'Content-Type': 'application/json',
                                        }
                                    },
                                ).then(() => {
                                        setSubmitionCompleted(true);
                                    }
                                );
                            }}

                            validationSchema={Yup.object().shape({
                                email: Yup.string()
                                    .email()
                                    .required('Required'),
                                name: Yup.string()
                                    .required('Required'),
                                comment: Yup.string()
                                    .required('Required'),
                            })}
                        >
                            {(props) => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    dirty,
                                    isSubmitting,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    handleReset,
                                } = props;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <TextField
                                            label="name"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.name && touched.name) && errors.name}
                                            margin="normal"
                                        />

                                        <TextField
                                            error={errors.email && touched.email}
                                            label="email"
                                            name="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.email && touched.email) && errors.email}
                                            margin="normal"
                                        />

                                        <TextField
                                            label="comment"
                                            name="comment"
                                            value={values.comment}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            helperText={(errors.comment && touched.comment) && errors.comment}
                                            margin="normal"
                                        />
                                        <DialogActions>
                                            <Button
                                                type="button"
                                                className="outline"
                                                onClick={handleReset}
                                                disabled={!dirty || isSubmitting}
                                            >
                                                Reset
                                            </Button>
                                            <Button type="submit" disabled={isSubmitting}>
                                                Submit
                                            </Button>
                                        </DialogActions>
                                    </form>
                                );
                            }}
                        </Formik>
                    </DialogContent>
                </React.Fragment>
                }
                {isSubmitionCompleted &&
                <React.Fragment>
                    <DialogTitle id="form-dialog-title">Thanks!</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Thanks
                        </DialogContentText>
                        <DialogActions>
                            <Button
                                type="button"
                                className="outline"
                                onClick={handleClose}
                            >
                                Back to app
                            </Button>
                        </DialogActions>
                    </DialogContent>
                </React.Fragment>}
            </Dialog>
        </React.Fragment>
    );
}
const TestForm = withStyles(styles)(Contact);
export default TestForm;