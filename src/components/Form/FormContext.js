import {createContext, useContext} from "react";

const initialState = {
    state: {},
    actions: {}
}

export const FormContext = createContext(initialState);
export const useFormContext = () => useContext(FormContext);


