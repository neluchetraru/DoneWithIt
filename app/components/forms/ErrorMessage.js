import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppText from '../AppText'

export default function ErrorMessage({ errors, visible, prop }) {
    if (!errors || !visible) return null
  return (
    <AppText style={styles.error}>
        { errors[prop] } 
    </AppText>
  )
}

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
})