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
import {StyleSheet, View, Button, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

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
          component={HomeScreen1}
          options={{
            title: 'home',
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
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HoneScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
};

const SettingStack = createStackNavigator();
const SettingStackScreen: React.FC = () => {
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting" component={DetailScreen} />
      <SettingStack.Screen name="setting1" component={HomeScreen1} />
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
});
export default App;

const HomeScreen1: React.FC = ({navigation}) => {
  return (
    <View style={styles.homeScreenContainer}>
      <Text>Home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
