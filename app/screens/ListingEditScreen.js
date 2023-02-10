import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import * as Location from 'expo-location'

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton
} from '../components/forms'

import Screen from '../components/Screen'
import CategoryPickerItem from '../components/CategoryPickerItem'
import FormImagePicker from '../components/forms/FormImagePicker'
import useLocation from '../hooks/useLocation'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    price: Yup.number().required().min(1).max(10000).label('Price'),
    description: Yup.string().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1, "Please select at least one image")
})

const categories = [
    { label: "Furniture", value: 1, backgroundColor: 'red', icon: 'apps' },
    { label: "Clothing", value: 2, backgroundColor: 'green', icon: 'email' },
    { label: "Camera", value: 3, backgroundColor: 'blue', icon: 'lock' },
]

export default function ListingEditScreen() {
    const location = useLocation()

  return (
    <Screen>
        <AppForm
            initialValues={{
                title: "",
                price: "",
                description: "",
                category: null,
                images: []
            }}
            onSubmit={(values) => console.log(location)}
            validationSchema={validationSchema}
        >
            <FormImagePicker name="images" />
            <AppFormField maxLength={255} name="title" placeholder="Title" />
            <AppFormField maxLength={8} name="price" placeholder="Price" keyboardType="numeric" width={120}/>
            <AppFormPicker items={categories} name="category" placeholder="Category" width='50%' PickerItemComponent={CategoryPickerItem} numberOfColumns={3}/>
            <AppFormField maxLength={255} multiline name="description" numberOfLines={3} placeholder="Description" />
            <SubmitButton title="Post" />
        </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({

})