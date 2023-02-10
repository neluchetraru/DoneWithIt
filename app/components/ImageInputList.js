import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import ImageInput from './forms/ImageInput'

export default function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrollView = useRef()
  return (
    <View>
        <ScrollView horizontal ref={scrollView} onContentSizeChange={() => scrollView.current.scrollToEnd()}>
            <View style={styles.container}>
                { imageUris.map(uri => 
                        <View key={uri} style={styles.image}>
                            <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)} key={uri} />
                        </View>
                    )}
                <ImageInput onChangeImage={onAddImage}/>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        marginRight: 10
    }
})