import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';

export const PopupConfirm = ({
  visible,
  onpressChangeState,
  onPressYES,
  itemTitle,
}) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={() => {
        onpressChangeState();
        console.log('123');
      }}>
      <View style={styles.wrapViewModal}>
        <View style={styles.wrapContent}>
          <MaterialCommunityIcons
            name="comment-question-outline"
            color={'skyblue'}
            size={35}
          />
          <Text style={styles.textTitle}>
            Are you sure to delete this item?
          </Text>
        </View>
        <View style={styles.wrapViewBtn}>
          <TouchableOpacity
            onPress={() => {
              onPressYES();
            }}
            style={styles.btnYes}>
            <Text style={styles.textYes}>{itemTitle.left}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              onpressChangeState();
            }}
            style={styles.btnNo}>
            <Text style={styles.textNo}>{itemTitle.right}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  wrapViewModal: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: '90%',
    height: 170,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineView: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
    marginBottom: 90,
  },
  wrapViewBtn: {
    flexDirection: 'row',
    height: 35,
  },
  btnYes: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textYes: {fontSize: 20, color: 'white', fontWeight: 'bold'},
  btnNo: {
    flex: 1,
    backgroundColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNo: {fontSize: 20, color: 'black', fontWeight: 'bold'},
  wrapContent: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    // backgroundColor: 'red',
    marginHorizontal: 20,
    marginTop: 40,
  },
  textTitle: {fontSize: 16, fontWeight: '500', marginTop: 10},
});
