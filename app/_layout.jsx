import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const _layout = () => {
  return (
    <>
      <Text>NASHE</Text>
      <Slot name="index"/>
      <Text>NASHE</Text>
    </>
  )
}

export default _layout

