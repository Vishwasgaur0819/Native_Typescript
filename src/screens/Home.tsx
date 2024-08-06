import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { DrawerStackList, MainStackParamList } from '../types/navigation'
import { DrawerScreenProps } from '@react-navigation/drawer'
import Header from '../components/Header'



type Props = NativeStackScreenProps<MainStackParamList, 'Home'> & DrawerScreenProps<DrawerStackList, 'Home'>;

const Home = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <Header/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})