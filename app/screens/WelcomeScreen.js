import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '../components/AppButton';

export default function WelcomeScreen() {
  return (
    <ImageBackground style={styles.background} source={require('../assets/background.jpg')} blurRadius={6}>
        <View style={styles.logoContainer}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
            <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonsContainer}>
            <AppButton title="Login" />
            <AppButton title="Register" color='secondary'/>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: 'center'
    },
    buttonsContainer: {
        width: "100%",
        padding: 20
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    }
});