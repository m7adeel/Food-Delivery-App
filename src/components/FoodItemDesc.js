import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

import { SText, SView } from "../Provider/ComponentProvider";

import { Ionicons } from "@expo/vector-icons";

export default function FoodItemDesc({ image, name }) {
  let rotateView = new Animated.Value(0);

  const startAnimation = () => {
    Animated.timing(rotateView, {
      toValue: 1,
      duration: 2500,
      easing: Easing.sin,
      useNativeDriver: false,
    }).start(() => {});
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const RotateData = rotateView.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "45deg"],
  });
  const RotateData2 = rotateView.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "-25deg"],
  });
  const size = rotateView.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 300],
  });

  return (
    <View>
      <SView
        className="flex-row align-center justify-center mt-5 relative"
        style={{ width: 350, height: 320 }}
      >
        <Animated.Image
          source={image}
          style={{
            width: size,
            height: size,
            zIndex: -1,
            transform: [
              { rotateX: RotateData },
              // { rotateY: RotateData2 },
              { rotateZ: RotateData },
            ],
          }}
        />
      </SView>
      <SView className="px-7 pb-8 flex-row align-middle justify-between">
        <SView className="w-48">
          <SView className="flex-row justify-between">
            <SText className="font-medium text-2xl">$ 12.75 </SText>
            <SText className="font-medium text-2xl text-green-500/75">
              Save 10%
            </SText>
          </SView>
          <SText className="text-gray-400/75">Shipping Address</SText>
          <SText
            className="text-gray-400/75 text-ellipsis"
            style={{ overflow: "hidden", maxHeight: 20 }}
          >
            This is the Area for the Shiping Address
          </SText>
        </SView>
        <TouchableOpacity>
          <SView
            className="justify-center h-20 w-12 border-green-300/50 border-2 rounded align-middle"
            style={{ alignItems: "center" }}
          >
            <Ionicons name="cart" size={35} />
          </SView>
        </TouchableOpacity>
        <TouchableOpacity>
          <SView
            className="justify-center w-12 h-20 border-green-300/50 border-2 rounded align-middle"
            style={{ alignItems: "center" }}
          >
            <Ionicons name="bookmark-outline" size={35} />
          </SView>
        </TouchableOpacity>
      </SView>
      <SView className="flex-row align-middle justify-center">
        <Animated.View
          style={{ width: 300, backgroundColor: "#f2f2f2", height: 2 }}
        ></Animated.View>
      </SView>
      <SView className="px-7 py-5 flex-row align-middle justify-evenly">
        <SView className="flex-1 mx-2">
          <SText className="text-gray-400 tracking-widest">FOOD ENERGY</SText>
        </SView>
        <SView className="h-24 bg-gray-100 rounded-lg" style={{width:2}}></SView>
        <SView className="flex-1 mx-2">
          <SText className="text-gray-400 tracking-widest">SERVING SIZE</SText>
        </SView>
      </SView>
    </View>
  );
}
