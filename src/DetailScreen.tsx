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

const Item = ({itemTitle}) => (
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
const DetailScreen: React.FC = ({navigation}) => {
  const renderItem = ({item}) => <Item itemTitle={item.title} />;
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
});
export default DetailScreen;
