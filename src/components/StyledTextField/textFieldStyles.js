import {withStyles} from "@material-ui/core";

const textFieldStyles = withStyles({
    root: {
        paddingLeft: '1vh',
        '& .MuiOutlinedInput-root': {
            minWidth: '45vh',
            maxHeight: '2.5em',
            borderRadius: '2px',
            '& fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                backgroundColor: 'rgba(0,0,0,0.05)',
                borderWidth: '1px',
            },
        },
    },
});

export default textFieldStyles;
