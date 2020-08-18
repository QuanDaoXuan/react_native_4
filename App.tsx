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
import {StyleSheet} from 'react-native';
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
          component={HoneScreen}
          options={{
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
          component={DetailScreen}
          options={{
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
          component={DetailScreen}
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

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: 'white',
  },
});
export default App;
