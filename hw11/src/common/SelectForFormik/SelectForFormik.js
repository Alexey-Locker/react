import { Select } from '@material-ui/core';
import { useFormikContext } from 'formik';
import React from 'react'

export default function SelectForFormik({ children, ...props }) {
    const formik = useFormikContext();
    const { name } = props;
    return (
        <Select
            value={ formik.values[name] }
            onChange={ formik.handleChange }
            onBlur={ formik.handleBlur }
            error={ !!formik.errors[name] }
            { ...props }
        >
            {children }
        </Select>
    )
}
