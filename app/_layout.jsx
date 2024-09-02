import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Slot } from 'expo-router';

export default function RootLayout() {
  return (
    <>
    <Text>Header</Text>
        <Slot/>
    <Text>Footer</Text>
    </>
  );
}

