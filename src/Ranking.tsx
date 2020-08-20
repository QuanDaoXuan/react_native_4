/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from 'react-native';
import Modal from 'react-native-modal';

const RankingScreen: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Button
        title="Show Modal"
        onPress={() => {
          setVisible(true);
          console.log('123');
        }}
      />
      <Modal
        isVisible={visible}
        onBackdropPress={() => {
          setVisible(false);
        }}>
        <View
          style={{
            backgroundColor: 'white',
            alignSelf: 'center',
            width: '90%',
            height: 170,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, fontWeight: '500', marginTop: 10}}>
            Are you sure to delete this item?
          </Text>
          <View
            style={{
              height: 1,
              width: '100%',
              backgroundColor: 'gray',
              marginBottom: 90,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              height: 35,
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'orange',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
                YES
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: 'lightgrey',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                NO
              </Text>
            </View>
          </View>
        </View>
      </Modal>
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
