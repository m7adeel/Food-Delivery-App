import React from "react";
import { styled } from "nativewind";

import { View,Text,Pressable,TouchableOpacity } from "react-native";

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

export{
    SView,
    SText,
}