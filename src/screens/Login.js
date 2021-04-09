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
const title = 'Welcome Back!';
const tip = 'Login to continue Buble Drink';
const signup = 'New user? Sign Up';
const terms =
	'By signing up you indicate that you have read and agreed to the Patch Terms of Service';

const Login = ({ params }) => (
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
					icon={require('../../assets/images/email.png')}
					placeholder='Email Address'
				/>
				<View style={{ paddingTop: 18 }} />
				<Input
					icon={require('../../assets/images/padlock.png')}
					placeholder='Password'
					password
				/>
			</View>
			<View style={styles.remember}>
				<View>
					<RadioGroup size={16} thickness={2} color={'#FFFFFF'}>
						<RadioButton color={'#FFFFFF'} value={''}>
							<Text style={styles.rememberText}>Remember Me</Text>
						</RadioButton>
					</RadioGroup>
				</View>
				<View style={{}}>
					<Text style={styles.forgotText}>Forget Password?</Text>
				</View>
			</View>
			<View
				style={{
					marginTop: 36,
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Button text='Login' />
			</View>
			<View style={styles.signup}>
				<Text style={styles.signupText}>{signup}</Text>
			</View>
			<View style={styles.terms}>
				<Text style={styles.termsText}>{terms}</Text>
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
		fontSize: 16,
		fontFamily: 'JetBrainsMono-Regular'
	},
	input: {
		marginTop: 20,
		justifyContent: 'center',
		alignItems: 'center'
	},
	remember: {
		marginTop: 10,
		marginLeft: 30,
		marginRight: 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		opacity: 0.6
	},
	rememberText: {
		color: '#FFFFFF',
		fontFamily: 'JetBrainsMono-Medium',
		fontSize: 12
	},
	forgotText: {
		color: '#FFFFFF',
		fontFamily: 'JetBrainsMono-Medium',
		fontSize: 12
	},
	signup: {
		marginTop: 112,
		justifyContent: 'center',
		alignItems: 'center'
	},
	signupText: {
		color: '#FF9F1C',
		fontFamily: 'JetBrainsMono-Medium',
		fontSize: 12
	},
	terms: {
		marginTop: 18,
		marginRight: 80,
		marginLeft: 80,
		justifyContent: 'center',
		alignItems: 'center'
	},
	termsText: {
		color: '#FFFFFF',
		fontFamily: 'JetBrainsMono-Medium',
		fontSize: 10,
		textAlign: 'center'
	}
});
export default Login;
