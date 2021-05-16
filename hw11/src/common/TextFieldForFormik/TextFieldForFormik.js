import { TextField } from '@material-ui/core';
import { useFormikContext } from 'formik'
import React from 'react'

export default function TextFieldForFormik(props) {
    const formik = useFormikContext();
    const { name } = props;
    return (
        <TextField
            value={ formik.values[name] }
            error={ !!formik.errors[name] }
            helperText={ formik.errors[name] }
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            { ...props }
        />
    )
}
