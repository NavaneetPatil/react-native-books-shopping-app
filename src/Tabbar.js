import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import AccountScreen from './screens/AccountScreen';
// import BookScreen from './screens/BookScreen';
// import CategoryScreen from './screens/CategoryScreen';
// import HomeScreen from './screens/HomeScreen';
// import NewReviewScreen from './screens/NewReviewScreen';
// import ReviewsScreen from './screens/ReviewsScreen';
// import SearchScreen from './screens/SearchScreen';
import Home from './screens/Home';
import Shop from './screens/Shop';
import ShopNested from './screens/ShopNested';
import HomeNested from './screens/HomeNested';
import HomeScreen from './screens/HomeScreen';
import BookScreen from './screens/BookScreen';
import CartScreen from './screens/MyCart';

const Stack = createNativeStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Home2" component={HomeNested} />
      {/* <Stack.Screen name="ReviewsScreen" component={ReviewsScreen} />
      <Stack.Screen name="NewReviewScreen" component={NewReviewScreen} /> */}
    </Stack.Navigator>
  );
}

function HomeLibraryNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Book Screen" component={BookScreen} />
      <Stack.Screen name="My Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}

function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shop1" component={Shop} />
      <Stack.Screen name="Shop2" component={ShopNested} />
      {/* <Stack.Screen name="BookScreen" component={BookScreen} />
      <Stack.Screen name="ReviewsScreen" component={ReviewsScreen} />
      <Stack.Screen name="NewReviewScreen" component={NewReviewScreen} /> */}
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const TabbarStack = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeNav"
        component={HomeNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={SearchNavigator}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shop" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home Library"
        component={HomeLibraryNavigator}
        options={{
          tabBarLabel: 'LibHome',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="book" color={color} size={size} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="MyCart"
        component={CartScreen}
        options={{
          tabBarLabel: 'MyCart',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="menu" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TabbarStack;
