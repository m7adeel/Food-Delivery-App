import React,{useState} from 'react'
import { Animated,StyleSheet,Image } from 'react-native'

import { SText,SView,SAnimated } from '../Provider/ComponentProvider'

import { IconSize,Color,activeColor } from '../Provider/IconConfig'
import { Ionicons } from '@expo/vector-icons'

import Icon from "react-native-vector-icons/FontAwesome";

export default function CategoryBar() {
  const [catSelected,setCatSelected] = useState('Pizza')

  return (
    <SView>
      <SView className='flex-row align-middle justify-center'>
      <Animated.View style={{width:320,backgroundColor:'#f2f2f2',height:2}}></Animated.View>
      </SView>
      <SView className='flex-row h-12 align-middle justify-evenly'>
        <Ionicons name='pizza-outline' size={IconSize} color={catSelected == 'Pizza' ? activeColor : Color} style={[styles.reverseIcon,{width:IconSize}]}/>
        
      </SView>
    </SView>
  )
}

const styles = StyleSheet.create({
  reverseIcon:{
    transform:[{rotateZ:'180deg'}],
  }
})