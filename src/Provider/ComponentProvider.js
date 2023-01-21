import React, { useRef, useEffect } from "react";
import { styled } from "nativewind";

import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

let SView = styled(View);
let SText = styled(Text);

export const HorizontalBarSeperator = () => {
  return (
    <SView className="flex-row align-middle justify-center">
      <SView
        style={{ width: "90%", height: 1, backgroundColor: "#f2f2f2" }}
      ></SView>
    </SView>
  );
};

export const RatingDisplay = ({ rating, classNames, iconSize, style }) => {
  var complete_stars;
  let prevTimeout = 0
  const dur = 150

  try {
    complete_stars = Math.floor(rating);
  } catch (error) {
    console.log(error.message);
  }

  let rating_star_display = [];

  for (var i = 0; i < complete_stars; i++) {
    rating_star_display.push(
        // <RatingStar color="green" size={iconSize} />
        <AnimatedStar half={false} color={"green"} size={35} duration={dur} timingFunction={Easing.linear} timeout={prevTimeout}/>
    );
    prevTimeout += dur
  }

  if (complete_stars < rating) {
    rating_star_display.push(
        // <HalfStar size={iconSize} color="green" />
        <AnimatedStar half={true} color={"green"} size={35} duration={dur} timingFunction={Easing.linear} timeout={prevTimeout}/>
    );
  }

  return (
    <SView className={classNames} style={[style]}>
      {rating_star_display}
    </SView>
  );
};

export const AnimatedStar = ({
  half,
  color,
  size,
  duration,
  timingFunction,
  timeout,
}) => {
  let loading = new Animated.Value(0);

  useEffect(() => {
    console.log(timeout)
    setTimeout(() => {
      Animated.timing(loading, {
        toValue: 1,
        duration: duration,
        easing: timingFunction,
        useNativeDriver: false,
      }).start();
    }, timeout);
  }, []);

  const a_size = loading.interpolate({
    inputRange: [0, 1],
    outputRange: [0, size],
  });

  return (
    <Animated.View
      style={{ width: a_size,opacity:loading }}
    >
      {half ? (
        <HalfStar color={color} size={size} />
      ) : (
        <RatingStar color={color} size={size} />
      )}
    </Animated.View>
  );
};

export const HalfStar = ({ color, size }) => {
  return (
    <SView>
      <Ionicons
        name="star-half"
        color={color}
        style={{ position: "absolute" }}
        size={size}
      />
      <Ionicons name="star-outline" size={size} />
    </SView>
  );
};

export const RatingStar = ({ color, size }) => {
  return (
    <SView>
      <Ionicons
        name="star"
        color={color}
        style={{ position: "absolute" }}
        size={size}
      />
      <Ionicons name="star-outline" size={size} />
    </SView>
  );
};

export { SView, SText };
