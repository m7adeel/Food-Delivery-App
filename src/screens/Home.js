import { View, Text,StyleSheet,Image,Animated, Easing,ScrollView } from 'react-native'
import React,{useEffect,useState} from 'react'

import StatusBar from '../components/StatusBar'
import CategoryBar from '../components/CategoryBar'

import { SView } from '../Provider/ComponentProvider'
import FoodItemDesc from '../components/FoodItemDesc'

var pizzaImage = require('./pizza_pic.png')

export default function Home() {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <StatusBar title="Green Gross Pizza" desc="Fresh Line Pizza"/>
      <ScrollView>
      <CategoryBar />
      <FoodItemDesc image={pizzaImage}/>
      </ScrollView>
    </View>
  )
}