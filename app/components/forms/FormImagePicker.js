import { useFormikContext } from 'formik'
import React from 'react'

import ImageInputList from '../ImageInputList'
import ErrorMessage from './ErrorMessage'

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext()
  const imageUris = values[name]
  const handleAdd = uri => {
    setFieldValue(name, [...imageUris, uri])
  }

  const handleRemove = uri => {
    setFieldValue(name, imageUris.filter(imageUri => uri != imageUri))
  }

  return (
    <>
        <ImageInputList imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
        <ErrorMessage errors={errors} visible={touched} prop={name}/>
    </>
  )
}
