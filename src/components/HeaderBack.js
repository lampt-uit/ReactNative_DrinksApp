import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const HeaderBack = ({ onPress, ...params }) => (
	<TouchableOpacity style={{ marginLeft: 10 }} onPress={onPress}>
		<Image source={require('../../assets/images/left-arrow.png')} />
	</TouchableOpacity>
);

export default HeaderBack;
