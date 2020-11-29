import styles from './App.module.css';
import React from "react";
import {ThemeProvider} from "@material-ui/core";
import theme from "./configs/themeConfig";
import clsx from "clsx";
import Form from "./components/Form";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Form className={clsx(styles.App, styles.Container)}/>
        </ThemeProvider>
    );
}

export default App;
