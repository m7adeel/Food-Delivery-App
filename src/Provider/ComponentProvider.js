import React from "react";
import { styled } from "nativewind";

import { View,Text,Pressable,TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

let SView = styled(View);
let SText = styled(Text);

export const HorizontalBarSeperator = ()=>{
    return (
        <SView className="flex-row align-middle justify-center">
        <SView
            style={{ width: "90%", height: 1, backgroundColor: "#f2f2f2" }}
        ></SView>
        </SView>
    )
}

export const RatingDisplay = ({rating,classNames,iconSize,style})=>{
    var complete_stars;
    

    try {
        complete_stars = Math.floor(rating)    
    } catch (error) {
        console.log(error.message)
    }

    let rating_star_display = [];
    
    for(var i = 0 ; i < complete_stars ; i++){
        rating_star_display.push(<RatingStar color="green" size={iconSize}/>)
    }

    return(
        <SView className={classNames} style={[style]}>
            {rating_star_display}
        </SView>
    )
}

export const RatingStar = ({color,size})=>{
    return (
        <SView>
            <Ionicons name="star" color={color} style={{position:'absolute'}} size={size}/>
        <Ionicons name="star-outline" size={size}/>
        </SView>
    )
}

export{
    SView,
    SText,
}