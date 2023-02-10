import { StyleSheet } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import * as Yup from 'yup'

import { AppForm, SubmitButton, AppFormField } from '../components/forms'

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})


export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
        <AppForm validationSchema={validationSchema} initialValues={{ name: "", email: "", password: "" }} onSubmit={(values) => console.log(values)}>
            <AppFormField
                autoCorrect={false}
                icon="account"
                placeholder="Name"
                name="name"
            />
            <AppFormField
                autoCapitalize="none"
                autocorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                icon="email"
                placeholder="Email"
                name="email"
            />
            <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                textContentType="password"
                name="password"
                secureTextEntry
            />
            <SubmitButton title="Register" />
        </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginBottom: 20
    }
})
