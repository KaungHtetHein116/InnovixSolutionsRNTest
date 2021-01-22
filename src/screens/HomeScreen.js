import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import CategoryTab from './components/CategoryTab';

const SecondRoute = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Brands</Text>
  </View>
);
const ThirdRoute = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Promotions</Text>
  </View>
);

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'white'}}
    style={{backgroundColor: '#F2651C'}}
  />
);

const initialLayout = {width: Dimensions.get('window').width};

export default function HomeScreen() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'CATEGORIES'},
    {key: 'second', title: 'BRANDS'},
    {key: 'third', title: 'PROMOTIONS'},
  ]);

  const renderScene = SceneMap({
    first: CategoryTab,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => alert('Drawer')}>
          <Feather name="menu" size={30} color={'black'} />
        </TouchableOpacity>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <FontAwesome5
            name="baby-carriage"
            color={'#F2651C'}
            size={30}
            style={{marginRight: 10}}
          />
          <Text style={{fontSize: 20, color: 'black'}}>
            One Stop Baby Center
          </Text>
        </View>
        <TouchableOpacity onPress={() => alert('Search')}>
          <Feather name="search" size={30} color={'black'} />
        </TouchableOpacity>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 60,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    margin: 10,
  },
});
