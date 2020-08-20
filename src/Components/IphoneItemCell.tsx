/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Item = ({itemTitle}) => (
  <>
    <View style={styles.item}>
      <View
        style={{flex: 1, alignItems: 'flex-start', justifyContent: 'center'}}>
        <MaterialCommunityIcons name="instagram" color={'orange'} size={26} />
      </View>
      <Text style={styles.title}>{itemTitle}</Text>
      <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
        <MaterialCommunityIcons name="chevron-right" color={'gray'} size={26} />
      </View>
    </View>
    <View
      style={{
        backgroundColor: 'lightgray',
        height: 1,
        width: '100%',
        alignSelf: 'flex-end',
      }}
    />
  </>
);

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 20,
    color: 'orange',
  },
  topView: {
    height: 120,
    width: '100%',
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    fontSize: 30,
    textAlign: 'center',
  },
  body: {
    backgroundColor: Colors.white,
  },
  item: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    marginVertical: 0,
  },
  title: {
    flex: 5,
    fontSize: 16,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  row: {
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
});
