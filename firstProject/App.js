import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./Components/Login/Login";

import Dashboard from "./Components/Dashboard/Dashboard";
import Kpi_Ratings from "./Components/pages/Kpi_Ratings";
import { Button } from "react-native-elements/dist/buttons/Button";
const Draw = createDrawerNavigator();

function MyDraw() {
  return (
    <Draw.Navigator  
      initialRouteName="Logout"
      screenOptions={
        
        {
        headerTitleAlign: "center",
        
        headerStyle: {
          backgroundColor: "#3740FE",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
          
          
        },
      //  headerShown: false
        
      }}
    >
    
      <Draw.Screen
        name="Dashboard"
        component={Dashboard}
        options={({ title: "Dashboard" } , {headerShown: true})}
      />
      <Draw.Screen
        name="Kpi_Ratings"
        component={Kpi_Ratings}
        options={({ title: "Kpi_Ratings" }, {headerShown: true})}
      />
        <Draw.Screen
      
      name="Logout"
      component={Login}
      options={({ title: "Login" } ,{ swipeEnabled: false })}
    
    />
      
    </Draw.Navigator>
  );
}

export default function App() {
  return (
    
    <NavigationContainer >
      <MyDraw />
    </NavigationContainer>
  );
}
