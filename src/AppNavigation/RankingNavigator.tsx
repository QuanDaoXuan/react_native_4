import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../HomeScreen';
import TutorialScreen from '../Tutorial';
const HomeStack = createStackNavigator();

export const HomeStackScreen: React.FC = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="TutorialScreen" component={TutorialScreen} />
    </HomeStack.Navigator>
  );
};
