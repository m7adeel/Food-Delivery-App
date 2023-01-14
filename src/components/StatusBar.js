import React from "react";
import { SText, SView } from "../Provider/ComponentProvider";
import { IconSize,Color } from "../Provider/IconConfig";

import { Pressable, Text, View } from "react-native";
import { styled, useColorScheme } from "nativewind";

import { Ionicons } from "@expo/vector-icons";


export default function StatusBar({ title, desc }) {
  return (
    <SView className="h-24 flex-row align-middle justify-between" style={{justifyContent:'space-around',alignItems:'center'}}>
      <Ionicons name="grid-outline" size={IconSize} color={Color}/>
      <SView>
        <SText className="text-center font-medium text-lg">{title}</SText>
        <SText className="text-center font-extralight text-sm">{desc}</SText>
      </SView>
      <Ionicons name="cart" size={IconSize} color={Color}/>
    </SView>
  );
}
