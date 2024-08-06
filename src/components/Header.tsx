import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react';

type HeaderProp = {title?:string}

const Header = ({title = 'Hello'}:HeaderProp) => {
  return (
    <View style={{height:100,backgroundColor:'blue',}} >
      <Text>{title}</Text>
      {/* {children} */}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({});