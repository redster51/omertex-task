import React from "react";
import {Checkbox} from "@material-ui/core";
import clsx from "clsx";
import useStyles from "./checkBoxStyles";

const StyledCheckBox = ({onChange, ...other}) => {
    const classes = useStyles();

    return <Checkbox className={classes.root}
                     color="default"
                     checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)}/>}
                     icon={<span className={classes.icon}/>}
                     inputProps={{'aria-label': 'checkbox'}}
                     onChange={onChange}
                     {...other}/>
}

export default StyledCheckBox;
