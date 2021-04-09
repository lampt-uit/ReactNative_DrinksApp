import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import HeaderRight from '../../components/HeaderRight';
import HeaderLanguageChange from '../../components/HeaderLanguageChange';

const HomeScreen = ({ navigation, route }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<HeaderRight
					onPress={() => {
						navigation.navigate('Wallet');
					}}
				/>
			),
			headerLeft: () => (
				<HeaderLanguageChange
					onPress={() => {
						Alert.alert('Doing SomeThing');
					}}
				/>
			)
		});
	});
	return (
		<View style={styles.container}>
			<View
				style={{
					width: 250,
					height: 100,
					backgroundColor: '#000000',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text style={{ color: '#FF9F1C', fontSize: 22 }}>Home Screen</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default HomeScreen;
