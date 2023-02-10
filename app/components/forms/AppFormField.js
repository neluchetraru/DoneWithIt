import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'

export default function AppFormField({ name, width, ...otherProps }) {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext()
  return (
    <>
        <AppTextInput
            onChangeText={handleChange(name)}
            onBlur={() => setFieldTouched(name)}
            { ...otherProps }
            width={width}
          
        />
        <ErrorMessage errors={errors} visible={touched} prop={name}/>
    </>
  )
}

const styles = StyleSheet.create({})