import React from 'react';
import {
	Text,
	View,
	StyleSheet,
	Image,
	ImageBackground,
	Dimensions
} from 'react-native';
import Input from '../components/Input.js';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');
const title = 'Forget Password';
const tip =
	'A text message with a 4-digit verification code was just sent to 09485*****';
const MobileNumber = ({ params }) => (
	<View style={styles.container}>
		<ImageBackground
			source={require('../../assets/images/background4.jpg')}
			style={{ width: width, height: height }}
		>
			<View style={styles.darkLayer}></View>
			<View style={styles.logo}>
				<Image source={require('../../assets/images/logo.png')} />
			</View>
			<View style={styles.title}>
				<Text style={styles.titleText}>{title}</Text>
			</View>
			<View style={styles.tip}>
				<Text style={styles.tipText}>{tip}</Text>
			</View>
			<View style={styles.input}>
				<Input
					icon={require('../../assets/images/phone-call.png')}
					placeholder='Mobile Number'
				/>
			</View>

			<View
				style={{
					marginTop: 36,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Button text='Proceed' />
			</View>
		</ImageBackground>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	darkLayer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: '#000000',
		opacity: 0.6
	},
	logo: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	title: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	titleText: {
		color: '#FFFFFF',
		fontFamily: 'JetBrainsMono-Bold',
		fontSize: 22
	},
	tip: {
		marginTop: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	tipText: {
		color: '#FFFFFF',
		fontSize: 12,
		fontFamily: 'JetBrainsMono-Regular',
		textAlign: 'center',
		opacity: 0.8
	},
	input: {
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
export default MobileNumber;
