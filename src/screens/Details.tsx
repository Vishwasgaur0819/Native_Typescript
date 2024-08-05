import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { MainStackParamList } from '../types/navigation'

const Details = ({navigation,route}:NativeStackScreenProps<MainStackParamList, 'Details'>) => {
  return (
    <View>
      <Text>{route.params.id}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})