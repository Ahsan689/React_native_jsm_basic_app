import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Aora</Text>
      <StatusBar style='auto'/>
      <Link href='/profile' style={{color:'blue'}}> Go to Profile......</Link>
    </View>
  )
}

export default App

