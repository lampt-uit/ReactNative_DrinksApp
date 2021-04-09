import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

const HeaderLanguageChange = ({ onPress, ...params }) => (
	<TouchableOpacity
		style={{
			marginLeft: 10,
			marginTop: 8,
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center'
		}}
		onPress={onPress}
	>
		<Text
			style={{
				marginRight: 3,
				fontSize: 18,
				fontFamily: 'JetBrainsMono-Bold'
			}}
		>
			EN
		</Text>
		<Image source={require('../../assets/images/down-arrow.png')} />
	</TouchableOpacity>
);

export default HeaderLanguageChange;
