import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FavouritesScreen from '../screens/favourites';
import HeaderTitle from '../components/HeaderTitle';

const FavouritesStack = ({ params }) => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Favourites Screen'
				component={FavouritesScreen}
				options={{ headerTitle: (props) => <HeaderTitle /> }}
			/>
		</Stack.Navigator>
	);
};

export default FavouritesStack;
