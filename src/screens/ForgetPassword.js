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
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

const { width, height } = Dimensions.get('window');
const title = 'Forget Password';
const tip = 'Please enter a new password and confirm password';
const signup = 'New user? Sign Up';
const terms =
	'By signing up you indicate that you have read and agreed to the Patch Terms of Service';

const ForgetPassword = ({ params }) => (
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
					icon={require('../../assets/images/padlock.png')}
					placeholder='New Password'
					password
				/>
				<View style={{ paddingTop: 18 }} />
				<Input
					icon={require('../../assets/images/padlock.png')}
					placeholder='Confirm Password'
					password
				/>
			</View>
			<View
				style={{
					marginTop: 36,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Button text='Sign Up' />
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
		justifyContent: 'center',
		alignItems: 'center'
	},
	tipText: {
		color: '#FFFFFF',
		fontSize: 15,
		fontFamily: 'JetBrainsMono-Regular',
		textAlign: 'center'
	},
	input: {
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
export default ForgetPassword;
