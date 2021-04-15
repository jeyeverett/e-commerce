import React from 'react';

import { FormGroup, FormInputStyled, FormInputLabel } from './form-input.styles';

const FormInput = ({ handleChange, label, ...inputProps }) => (
    <FormGroup>
        <FormInputStyled onChange={handleChange} {...inputProps} />
        {
            label ? 
            <FormInputLabel { ...inputProps }>
                {label}
            </FormInputLabel>
            : null
        }
    </FormGroup>
);

export default FormInput;