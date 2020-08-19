import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LogoutScreen from '../LogoutScreen';
import DetailScreen from '../DetailScreen';
import {Image, StyleSheet} from 'react-native';

const SettingStack = createStackNavigator();
export const SettingStackScreen: React.FC = () => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackImage: () => {
          return (
            <Image
              style={styles.tinyLogo}
              source={require('../Image/arrow_left@x2.png')}
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
