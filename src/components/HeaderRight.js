import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';

const HeaderRight = ({ onPress, ...params }) => {
	return (
		<TouchableOpacity style={{ marginRight: 20 }} onPress={onPress}>
			<Image source={require('../../assets/images/shopping-cart.png')} />
		</TouchableOpacity>
	);
};

export default HeaderRight;
