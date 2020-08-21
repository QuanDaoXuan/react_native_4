import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const TextFieldCustom = ({onchangeText, title, icon}) => {
  const [value, setValue] = React.useState('');
  const iconName = icon ? icon : 'account';
  return (
    <View style={styles.wrapView}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.wrapContent}>
        <TextInput
          style={[styles.textField, !icon && styles.nonIcon]}
          onChangeText={(text) => {
            setValue(text);
            onchangeText(text);
          }}
          value={value}
        />
        {icon && (
          <View style={styles.wrapIcon}>
            <MaterialCommunityIcons
              name={iconName}
              color={'skyblue'}
              size={23}
            />
          </View>
        )}
      </View>
    </View>
  );
};
export default TextFieldCustom;

const styles = StyleSheet.create({
  textField: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 0,
      width: 2,
    },
    elevation: 2,
    backgroundColor: 'white',
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 15,
    color: 'grey',
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  wrapView: {
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  wrapContent: {
    justifyContent: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  wrapIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    left: 10,
  },
  nonIcon: {
    paddingHorizontal: 5,
  },
});
