import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import TextFieldCustom from '../Components/TextFieldCustom';
import {Button} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';

const LoginScreen: React.FC = () => {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    // <ImageBackground source={require('../Image/2.jpg')} style={styles.image}>

    <ScrollView style={styles.container}>
      <KeyboardAvoidingView>
        <Text style={styles.engine}>Welcome back</Text>
        <TextFieldCustom
          onchangeText={(text) => {
            setUserName(text);
            console.log(userName);
          }}
          title={'user name'}
          icon={'account'}
        />
        <TextFieldCustom
          onchangeText={(text) => {
            setPassword(text);
            console.log(password);
          }}
          title={'password'}
          icon={'lock'}
        />
        <Button
          onPress={() => {
            //
          }}
          style={styles.btn}>
          Login
        </Button>
      </KeyboardAvoidingView>
    </ScrollView>

    /* </ImageBackground> */
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    fontSize: 30,
    textAlign: 'center',
    color: '#699DE9',
    fontWeight: '600',
    marginBottom: 100,
    marginTop: 50,
  },
  body: {
    backgroundColor: Colors.white,
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    width: '100%',
    // backgroundColor: 'red',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    flex: 1,
    resizeMode: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: '80%',
    height: 45,
    backgroundColor: 'orange',
    borderRadius: 10,
    marginTop: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
export default LoginScreen;
