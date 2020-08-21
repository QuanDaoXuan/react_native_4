import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../Screen/LoginScreen';
import TutorialScreen from '../Tutorial';
const RankStack = createStackNavigator();

export const RankingStackScreen: React.FC = () => {
  return (
    <RankStack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <RankStack.Screen name="Login" component={LoginScreen} />
      <RankStack.Screen name="TutorialScreen" component={TutorialScreen} />
    </RankStack.Navigator>
  );
};
