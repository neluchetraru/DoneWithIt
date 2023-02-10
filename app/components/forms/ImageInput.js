import { Alert, Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

export default function ImageInput({ imageUri, onChangeImage }) {
    
    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync()
        if (!granted)
        alert('You need permission to access the library')
    }

    useEffect(() => {
        requestPermission()
    }, [])

    const handlePress = () => {
        if (!imageUri) selectImage();
        else Alert.alert('Delete', 'Are you sure you want to delete this image?', [
            { text: 'Yes', onPress: () => onChangeImage(null) },
            { text: 'No'}
        ])
    }

    const selectImage = async () => {
        try {
          const result = await ImagePicker.launchImageLibraryAsync(({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.5
          }))

          if (!result.canceled)
            onChangeImage(result.assets[0]['uri'])
          
        } catch(error){
          console.log('Error reading an image.')
        }
      }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            { !imageUri && <MaterialCommunityIcons name='camera' color={colors.medium} size={40} />}
            { imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
        </View>
    </TouchableWithoutFeedback>

  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    }
})