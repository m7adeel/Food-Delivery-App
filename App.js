import { StyleSheet, Text, View,SafeAreaView } from "react-native";
import { SView } from "./src/Provider/ComponentProvider";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import Order from "./src/screens/Order";
import Home from "./src/screens/Home";
import SavedItem from "./src/screens/SavedItem";
import Profile from "./src/screens/Profile";

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <View style={{marginTop:30,flex:1}}>
      <NavigationContainer>
        <Tabs.Navigator screenOptions={({route})=>({
          headerShown:false,
          tabBarStyle: {
            height:70,
            paddingBottom:5,
            backgroundColor:'#CA8A04',
          },
          tabBarIcon:({focused,color,size})=>{
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Order") {
              iconName = focused ? "cube" : "cube-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person":"person-outline";
            } else if (route.name === "Saved") {
              iconName = focused ? "bookmark" : "bookmark-outline"
            }
            const height = focused ? "h-20":"h-20";
            return (
              
              <SView className={"w-24 pt-1 flex-row justify-center align-middle bg-yellow-600 rounded border-x-slate-200 " + height} style={focused?[tabBarIconStyle.activeIcon]:[tabBarIconStyle.Icon]}>
                <Ionicons name={iconName} size={35} color={'white'} />
              </SView>
            )
          },
          tabBarLabel:()=>{},
          
        })}>
          <Tabs.Screen name="Order" component={Order} />
          <Tabs.Screen name="Home" component={Home} />
          <Tabs.Screen name="Saved" component={SavedItem} />
          <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
      </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const tabBarIconStyle = StyleSheet.create({
  activeIcon:{
    bottom:15,
    alignItems:'center',
    justifyContent:'center'
  },
  Icon:{
    bottom:0,
  }
})
