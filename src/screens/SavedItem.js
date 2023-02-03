import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Animated,
  Easing,
} from "react-native";
import React, { useEffect } from "react";
import Saved from "../components/Saved";
import StatusBar from "../components/StatusBar";
import {
  SView,
  SText,
  HorizontalBarSeperator,
} from "../Provider/ComponentProvider";
import { DataProvider } from "../Provider/DataProvider";

export default function SavedItem() {
  const windows_width = Dimensions.get("window").width;

  var dataProv = DataProvider.getInstance();
  var savedFoods = dataProv.getSavedItem();

  const anim = Array(savedFoods.length).fill(
    new Animated.Value(-(windows_width - 30))
  );

  useEffect(() => {
    for (var i = 0; i < savedFoods.length-1; i++) {
      var timeout = i*500;
      // setTimeout(() => {
        Animated.timing(anim[i], {
          toValue: 0,
          duration: 2000,
          easing: Easing.exp,
          useNativeDriver: false,
          delay:timeout
        }).start(()=>{
          // console.log(anim[i])
        });
        // console.log(i)
      // }, timeout);
    }
  }, []);

  var DisplaySaved = savedFoods.map((item, index) => {
    console.log(anim[index])
    return (
      <Animated.View
        style={{ transform: [{ translateX: anim[index] }] }}
        key={index}
      >
        <Saved food_name={item} />
      </Animated.View>
    );
  });

  return (
    <SView className="bg-white" style={{ flex: 1 }}>
      <StatusBar title="Saved Item" desc="Order your Favorite Foods" />
      <HorizontalBarSeperator />
      <ScrollView>{DisplaySaved}</ScrollView>
    </SView>
  );
}
