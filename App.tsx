/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HoneScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, View, Button, Text, Image} from 'react-native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import LogoutScreen from './src/LogoutScreen';
import TutorialScreen from './src/Tutorial';
import RankingScreen from './src/Ranking';

const Tab = createMaterialBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Settings"
        activeColor="#B300F0"
        inactiveColor="gray"
        barStyle={styles.tabbar}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            title: 'home',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="home-edit-outline"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Rank"
          component={RankingScreen}
          options={{
            title: 'Rank',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="heart-flash"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingStackScreen}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="format-list-bulleted"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const HomeStack = createStackNavigator();
const HomeStackScreen: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <HomeStack.Screen name="Home" component={HoneScreen} />
      <HomeStack.Screen name="TutorialScreen" component={TutorialScreen} />
    </HomeStack.Navigator>
  );
};

const SettingStack = createStackNavigator();
const SettingStackScreen: React.FC = () => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackImage: () => {
          return (
            <Image
              style={styles.tinyLogo}
              source={require('./src/Image/arrow_left@x2.png')}
            />
          );
        },
      }}>
      <SettingStack.Screen name="Setting" component={DetailScreen} />
      <SettingStack.Screen name="LogoutScreen" component={LogoutScreen} />
    </SettingStack.Navigator>
  );
};
const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: 'white',
  },
  homeScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 22,
    height: 35,
  },
});
export default App;
