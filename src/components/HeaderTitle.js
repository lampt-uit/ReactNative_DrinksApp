import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const HeaderTitle = ({ params }) => {
	return (
		<Image
			style={styles.logo}
			source={require('../../assets/images/header-logo.png')}
		/>
	);
};
const styles = StyleSheet.create({
	logo: {
		width: 220,
		height: 220,
		marginBottom: 20
	}
});
export default HeaderTitle;
