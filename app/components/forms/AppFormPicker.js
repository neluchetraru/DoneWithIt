import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'
import { useFormikContext } from 'formik'

export default function AppFormPicker({ items, name, placeholder, PickerItemComponent, width, numberOfColumns }) {
  const { errors, setFieldValue, touched, values } = useFormikContext()

  return (
    <View>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        PickerItemComponent={PickerItemComponent}
        width={width}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage errors={errors} visible={touched} prop={name}/>
    </View>
  )
}

const styles = StyleSheet.create({})