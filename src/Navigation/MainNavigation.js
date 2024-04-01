import React, { } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../Screen/Splash';
import ProductListingScreen from '../Screen/Productlist';
import ItemList from '../Screen/ItemList';
import ProductDetail from '../Screen/ProductDetail';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="ProductList" component={ProductListingScreen} />
        <Stack.Screen name="itemList" component={ItemList} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
