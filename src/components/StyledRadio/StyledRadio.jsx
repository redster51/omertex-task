import {Radio} from "@material-ui/core";
import useStyles from "./radioStyles";
import clsx from "clsx";
import React from "react";

const StyledRadio = (props) => {
    const classes = useStyles();

    return <Radio className={classes.root}
                  checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)}/>}
                  icon={<span className={classes.icon}/>}
                  {...props}
    />
}

export default StyledRadio;
