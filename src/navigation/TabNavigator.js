import React from 'react';
import { Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import DrinksStack from './DrinksStack';
import FavouritesStack from './FavouritesStack';
import TrackStack from './TrackStack';
import WalletStack from './WalletStack';

const TabNavigator = ({ params }) =>
	// {
	// 	tabBarOptions = {
	// 		labelPosition: 'beside-icon'
	// 	}
	// }
	{
		const Tab = createBottomTabNavigator();
		return (
			<Tab.Navigator initialRouteName='HomeStack'>
				<Tab.Screen
					name='Home'
					component={HomeStack}
					options={{
						tabBarLabel: 'Home',
						tabBarIcon: ({ focused, color, size }) => (
							<Image
								source={
									focused
										? require('../../assets/images/home-ac.png')
										: require('../../assets/images/home.png')
								}
							></Image>
						)
					}}
				></Tab.Screen>
				<Tab.Screen
					name='Drinks'
					component={DrinksStack}
					options={{
						tabBarLabel: 'Our Drinks',
						tabBarIcon: ({ focused, color, size }) => (
							<Image
								source={
									focused
										? require('../../assets/images/drink-ac.png')
										: require('../../assets/images/drink.png')
								}
							></Image>
						)
					}}
				></Tab.Screen>
				<Tab.Screen
					name='Favourites'
					component={FavouritesStack}
					options={{
						tabBarLabel: 'Favourites',
						tabBarIcon: ({ focused, color, size }) => (
							<Image
								source={
									focused
										? require('../../assets/images/star-ac.png')
										: require('../../assets/images/star.png')
								}
							></Image>
						)
					}}
				></Tab.Screen>
				<Tab.Screen
					name='Track'
					component={TrackStack}
					options={{
						tabBarLabel: 'Track',
						tabBarIcon: ({ focused, color, size }) => (
							<Image
								source={
									focused
										? require('../../assets/images/tracking-ac.png')
										: require('../../assets/images/tracking.png')
								}
							></Image>
						)
					}}
				></Tab.Screen>
				<Tab.Screen
					name='Wallet'
					component={WalletStack}
					options={{
						tabBarLabel: 'Wallet',
						tabBarIcon: ({ focused, color, size }) => (
							<Image
								source={
									focused
										? require('../../assets/images/wallet-ac.png')
										: require('../../assets/images/wallet.png')
								}
							></Image>
						)
					}}
				></Tab.Screen>
			</Tab.Navigator>
		);
	};

export default TabNavigator;
