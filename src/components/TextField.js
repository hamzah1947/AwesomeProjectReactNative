import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { textFieldStyles } from '../Styles/TextFieldStyles';
import { Formik, Form, useField, useFormikContext } from 'formik';

const TextField = ({ label, ...props }): Node => {
  const [field, meta] = useField(props);
  const { touched, error } = meta;
  const { handleChange, handleBlur, isValid } = useFormikContext();
  return (
    <>
      {label && (
        <>
          <Text style={textFieldStyles.fontLarge}>{label}</Text>
        </>
      )}
      <TextInput
        {...props}
        style={textFieldStyles.normalTextField}
        placeholder={`Enter ${label}`}
        onChangeText={handleChange(props.name)}
        onBlur={handleBlur(props.name)}
        value={field.value}
      />
      {touched && error && !isValid &&
        <>
          <Text>{error}</Text>
        </>
      }
    </>
  );
};
export default TextField;
