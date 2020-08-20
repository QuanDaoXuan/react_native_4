/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const RankingScreen: React.FC = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
      <View
        style={{
          flexDirection: 'row',
          // alignSelf: 'stretch',
          // alignItems: 'center',
          backgroundColor: 'red',
          height: 400,
        }}>
        <View
          style={{
            width: 100,
            // height: 100,
            backgroundColor: 'powderblue',
            alignSelf: 'stretch',
          }}
        />
        <View
          style={{
            width: 100,
            backgroundColor: 'skyblue',
            justifyContent: 'center',
            height: '100%',
            // position: 'absolute',
          }}
        />
      </View>
      <View style={{height: 100, width: 100, backgroundColor: 'skyblue'}} />
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'steelblue',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    fontSize: 30,
    textAlign: 'center',
    color: 'orange',
  },
  body: {
    backgroundColor: Colors.white,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default RankingScreen;
