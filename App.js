import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, Button, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'

import AppButton from './app/components/AppButton';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import AppFormPicker from './app/components/forms/AppFormPicker';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ImageInput from './app/components/forms/ImageInput';
import ImageInputList from './app/components/ImageInputList';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2},
  { label: 'Cameras', value: 3}
]

export default function App() {
  return (
    <Screen>
      <ListingEditScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
