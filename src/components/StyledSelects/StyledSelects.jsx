import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import BootstrapInput from "./selectStyles";

const StyledSelects = ({options, value, handleChange, disabled, required}) => {
    return (
        <FormControl>
            <NativeSelect
                value={value}
                onChange={handleChange}
                input={<BootstrapInput/>}
                disabled={disabled}
                required={required}
            >
                <option aria-label="None" value=""/>
                {options.map((option) => <option value={option} key={option}>{option}</option>)}
            </NativeSelect>
        </FormControl>
    );
}

export default StyledSelects;
