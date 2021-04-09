import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Button from '../../components/Button';
import HeaderRight from '../../components/HeaderRight';
import HeaderBack from '../../components/HeaderBack';

const ConfirmedScreen = ({ navigation, route }) => {
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
				<HeaderBack
					onPress={() => {
						navigation.goBack();
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
				<Text style={{ color: '#FF9F1C', fontSize: 22 }}>
					Orders Confirmed Screen
				</Text>
			</View>
			<View style={{ paddingTop: 20 }}></View>
			<Button
				text='Go to Success Screen'
				onPress={() => {
					navigation.push('Success');
				}}
			></Button>
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

export default ConfirmedScreen;
