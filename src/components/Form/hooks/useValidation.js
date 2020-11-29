import {useCallback, useState} from "react";

const useValidation = (field, regExp) => {
    const [hasFieldError, setFieldErrorState] = useState(false);
    const onValidation = useCallback(() => {
        if (field) {
            setFieldErrorState(!regExp.test(field));
        } else {
            setFieldErrorState(false);
        }
    }, [regExp, field]);

    return [hasFieldError, onValidation];
}

export default useValidation;
