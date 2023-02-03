import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import AppButton from './app/components/AppButton';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

const categories = [
  { label: 'Furniture', value: 1 },
  { label: 'Clothing', value: 2},
  { label: 'Cameras', value: 3}
]

export default function App() {
  const [category, setCategory] = useState()
  return (
    <Screen>
      <AppPicker placeholder="Email" icon="apps" items={categories} selectedItem={category} onSelectedItem={item => setCategory(item)}/>
      <AppTextInput placeholder="Email" icon="email" />
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
