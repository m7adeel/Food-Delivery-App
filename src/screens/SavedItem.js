import { View, Text } from 'react-native'
import React from 'react'
import Saved from '../components/Saved'
import StatusBar from '../components/StatusBar'
import { SView,SText,HorizontalBarSeperator } from '../Provider/ComponentProvider'

export default function SavedItem() {
  return (
    <SView className='bg-white' style={{flex:1}}>
      <StatusBar title="Saved Item" desc="Order your Favorite Foods"/>
      <HorizontalBarSeperator />
      <Saved />
    </SView>
  )
}