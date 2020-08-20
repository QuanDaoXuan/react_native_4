/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from './CheckBox';
const TodoCell = ({itemTitle}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{width: 5, backgroundColor: 'red'}} />
        <View style={{width: '100%', flexDirection: 'row'}}>
          <View
            style={{
              flex: 0.8,
              justifyContent: 'center',
            }}>
            <CheckBox style={{marginLeft: 15, marginBottom: 12}} />
          </View>

          <View style={{flex: 6, justifyContent: 'center'}}>
            <Text style={{fontSize: 20, color: 'black', marginLeft: 10}}>
              {itemTitle}
            </Text>
            <Text style={{fontSize: 14, color: 'gray', marginLeft: 10}}>
              123
            </Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <MaterialCommunityIcons
              name="trash-can-outline"
              color={'red'}
              size={26}
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});
export default TodoCell;
