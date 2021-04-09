import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';

// import Onboarding from './src/screens/Onboarding';
// import Login from './src/screens/Login';
// import ForgetPassword from './src/screens/ForgetPassword';
// import MobileNumber from './src/screens/MobileNumber';
// import Otp from './src/screens/Otp';

const customFonts = {
	'JetBrainsMono-Bold-Italic': require('./assets/fonts/JetBrainsMono-Bold-Italic.ttf'),
	'JetBrainsMono-Bold': require('./assets/fonts/JetBrainsMono-Bold.ttf'),
	'JetBrainsMono-ExtraBold-Italic': require('./assets/fonts/JetBrainsMono-ExtraBold-Italic.ttf'),
	'JetBrainsMono-ExtraBold': require('./assets/fonts/JetBrainsMono-ExtraBold.ttf'),
	'JetBrainsMono-Italic': require('./assets/fonts/JetBrainsMono-Italic.ttf'),
	'JetBrainsMono-Medium-Italic': require('./assets/fonts/JetBrainsMono-Medium-Italic.ttf'),
	'JetBrainsMono-Medium': require('./assets/fonts/JetBrainsMono-Medium.ttf'),
	'JetBrainsMono-Regular': require('./assets/fonts/JetBrainsMono-Regular.ttf')
};
export default function App() {
	const [assetsLoaded, setAssetsLoaded] = useState(false);

	const _loadAssetsAsync = async () => {
		await Font.loadAsync(customFonts);
		setAssetsLoaded(true);
	};

	useEffect(() => {
		_loadAssetsAsync();
	});
	return assetsLoaded ? (
		<NavigationContainer>
			<StatusBar />
			<TabNavigator />
		</NavigationContainer>
	) : (
		<ActivityIndicator size='small' />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
