import React from "react";
import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../pages/Home";
import { Details } from "../pages/Details";

import { primaryColors } from "../styles/colors";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <>
    <StatusBar translucent />
    <stackRoutes.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: primaryColors.silver,
        },
      }}
    >
      
      <stackRoutes.Screen name="Home" component={Home} />
      <stackRoutes.Screen name="Details" component={Details} />
    </stackRoutes.Navigator>
  </>
);

export default AppRoutes;
