import React, { FunctionComponent } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import { colors } from "../components/colors";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";
import Avi from "../assets/avi/avatar.png";
import { CardProps } from "../components/Cards/types";
import Balance from "../screens/Balance";
import { Ionicons } from "@expo/vector-icons";

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.grayLight,
            borderBottomWidth: 0,
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.secondary,
          headerRightContainerStyle: {
            paddingRight: 25,
          },
          headerLeftContainerStyle: {
            paddingLeft: 10,
          },
          headerRight: () => (
            <Profile
              img={Avi}
              imgContainerStyle={{ backgroundColor: colors.tertiary }}
            />
          ),
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting
                mainText="Hey Aditya!"
                subText="Welcome Back"
                {...props}
              />
            ),
            headerLeft: () => <></>,
          }}
        />

        <Stack.Screen
          name="Balance"
          component={Balance}
          options={({ route }) => ({
            headerTitle: route?.params?.alias,
            headerTitleAlign: "center",
            headerBackImage: (props) => (
              <Ionicons
                name="chevron-back"
                size={25}
                color={colors.secondary}
              />
            ),
            headerLeftContainerStyle: {
              padding: 0,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
