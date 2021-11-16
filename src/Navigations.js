import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from './Screens/FeedScreen';
import Liked from './Screens/LikedScreen';
import Saved from './Screens/SavedScreen';
import Login from './Screens/LoginScreen';
import Signup from './Screens/SignupScreen';
import colors from './Constants/Colors';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: '#64b5f6',
        inactiveBackgroundColor:
          colors.colorScheme == 'light' ? 'white' : 'black',
        showLabel: false,
        style: {height: 40},
      }}
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName;

          switch (route.name) {
            case 'Feed':
              iconName = 'home';
              break;
            case 'Liked':
              iconName = 'heart';
              break;
            case 'Saved':
              iconName = 'bookmark';
              break;
          }

          return (
            <Ionicons
              name={iconName}
              size={35}
              color={colors.colorScheme == 'light' ? 'black' : 'white'}
            />
          );
        },
      })}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Saved" component={Saved} />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
