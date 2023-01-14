import { View, Text, StyleSheet, Image, Animated, Easing } from "react-native";
import React, { useEffect, useState } from "react";

import { SView } from "../Provider/ComponentProvider";

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

  const RotateData = rotateView.interpolate({inputRange:[0,1],outputRange:['0deg','45deg']})
  const RotateData2 = rotateView.interpolate({inputRange:[0,1],outputRange:['0deg','-25deg']})
  const size = rotateView.interpolate({inputRange:[0,1],outputRange:[0,300]})

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
              { rotateY: RotateData2 },
              { rotateZ: RotateData },
            ],
          }}
        />
      </SView>
      
    </View>
  );
}
