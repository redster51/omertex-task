import {useMemo} from "react";

const useFormValidation = (formState) => useMemo(
    () => Object.values(formState).some((field) => field),
    [formState]);

export default useFormValidation;
