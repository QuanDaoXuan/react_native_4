import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const DetailScreen: React.FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.body}>
        <Text style={styles.engine}>Detail!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    fontSize: 30,
    textAlign: 'center',
  },
  body: {
    backgroundColor: Colors.white,
  },
});
export default DetailScreen;
