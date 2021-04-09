import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DrinksScreen from '../screens/drinks';
import HeaderTitle from '../components/HeaderTitle';
const DrinksStack = ({ params }) => {
	const Stack = createStackNavigator();
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='Drinks Screen'
				component={DrinksScreen}
				options={{ headerTitle: (props) => <HeaderTitle /> }}
			/>
		</Stack.Navigator>
	);
};

export default DrinksStack;
