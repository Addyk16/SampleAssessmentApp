// import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SignIn from "./app/screens/SignIn";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignUp from "./app/screens/SignUp";
import Search from "./app/screens/Search";

export default function App() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="welcome" component={WelcomeScreen} />
                <Stack.Screen name="signIn" component={SignIn} />
                <Stack.Screen name="signUp" component={SignUp} />
                <Stack.Screen name="search" component={Search} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
