/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HoneScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HoneScreen} />
        <Tab.Screen name="Settings" component={DetailScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: 'lightgray',
  },
});

export default App;
