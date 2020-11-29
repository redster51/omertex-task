import {withStyles} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
    root: {
        minWidth: '240px',
        margin: '0 1vh'
    },
    input: {
        borderRadius: 2,
        position: 'relative',
        backgroundColor: 'inherit',
        borderColor: 'black',
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color']),
        '&:focus': {
            borderRadius: 2,
        },
    },
}))(InputBase);

export default BootstrapInput;
