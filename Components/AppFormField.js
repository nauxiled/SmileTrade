import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';


function AppFormField({ name, ... otherProps}) {
    const{ 
        setFieldTouched,
        setFieldValue,
        values,
        errors,
        touched 
    } = useFormikContext();
    return (
        <React.Fragment>
            <AppTextInput
                value = {values[name]}
                onBlur ={() => setFieldTouched(name)}
                onChangeText = {text => setFieldValue(name, text)}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </React.Fragment>
    );
}

export default AppFormField;