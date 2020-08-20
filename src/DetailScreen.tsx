/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Button,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import TodoCell from './Components/TodoCell';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Setting User',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const DetailScreen: React.FC = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => <TodoCell itemTitle={item.title} />;
  return (
    <SafeAreaView style={styles.container}>
      <TopViewInDetail numberTodo={5} />
      <View>
        <FlatList
          scrollEnabled={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View>
        <Button
          title="Logout"
          onPress={() => {
            navigation.navigate('LogoutScreen');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const TopViewInDetail: React.FC = ({numberTodo}) => {
  return (
    <View style={styles.topView}>
      <Text style={styles.textTitle}>{numberTodo} List</Text>
      <Text style={{marginLeft: 20, padding: 5}}>4 more todo</Text>
      <View style={{backgroundColor: 'lightgray', width: '100%', height: 2}} />
      <View
        style={{
          flexDirection: 'row',
          marginTop: -20,
          justifyContent: 'flex-end',
          // backgroundColor: 'red',
        }}>
        <View
          style={{
            backgroundColor: 'lightgray',
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
          }}>
          <MaterialCommunityIcons
            name="microsoft-xbox-controller-menu"
            color={'red'}
            size={26}
          />
        </View>
        <View
          style={{
            backgroundColor: 'red',
            width: 60,
            height: 40,
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            marginRight: 20,
          }}>
          <MaterialCommunityIcons name="plus" color={'white'} size={26} />
        </View>
      </View>
    </View>
  );
};

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
export default DetailScreen;
