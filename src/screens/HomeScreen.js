import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Home from './Tabs/Home';
import Search from './Tabs/Search';
import User from './Tabs/User';
import Wishlist from './Tabs/Wishlist';
import Add from './Tabs/Add';
const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <View style={styles.container}>
      {selectedTab == 1 ? (
        <Home />
      ) : selectedTab == 2 ? (
        <Search />
      ) : selectedTab == 3 ? (
        <Add
          onPost={() => {
            setSelectedTab(1);
          }}
        />
      ) : selectedTab == 4 ? (
        <Wishlist />
      ) : (
        <User />
      )}
      <View style={styles.bottomTab}>
        <TouchableOpacity onPress={() => setSelectedTab(1)}>
          <Image
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 1 ? 'black' : '#02ad9a'},
            ]}
            source={require('../assets/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab(2)}>
          <Image
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 2 ? 'black' : '#02ad9a'},
            ]}
            source={require('../assets/search.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab(3)}>
          <Image
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 3 ? 'black' : '#02ad9a'},
            ]}
            source={require('../assets/plus.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab(4)}>
          <Image
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 4 ? 'black' : '#02ad9a'},
            ]}
            source={require('../assets/love.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab(5)}>
          <Image
            style={[
              styles.tabIcon,
              {tintColor: selectedTab == 5 ? 'black' : '#02ad9a'},
            ]}
            source={require('../assets/user.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomTab: {
    width: '100%',
    height: 110,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#a2f2e9',
    position: 'absolute',
    bottom: 0,
  },
  tabIcon: {
    width: 50,
    height: 50,
  },
});
