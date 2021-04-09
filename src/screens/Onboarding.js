import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Alert } from 'react-native';
import Swiper from 'react-native-swiper';
import Button from '../components/Button';

const { width, height } = Dimensions.get('window');

class Onboarding extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slides: [
				{ id: 1, image: require('../../assets/images/background1.jpg') },
				{ id: 2, image: require('../../assets/images/background4.jpg') },
				{ id: 3, image: require('../../assets/images/background5.jpg') }
			]
		};
	}

	_btnClick = () => {
		Alert.alert('Get start here!');
	};
	render() {
		return (
			<View style={styles.container}>
				<Swiper
					autoplay={true}
					dot={<View style={styles.dot}></View>}
					activeDot={<View style={styles.activeDot}></View>}
				>
					{this.state.slides.map((slide) => {
						return (
							<View key={slide.id} style={styles.slide}>
								<Image source={slide.image} style={styles.image}></Image>
							</View>
						);
					})}
				</Swiper>
				<View style={styles.darkLayer} />
				<View style={styles.logoContainer}>
					<Image
						source={require('../../assets/images/logo.png')}
						style={styles.logo}
					></Image>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.text}>World's Greatest Drinks</Text>
				</View>
				<View style={styles.button}>
					<Button
						text={'Get start here'}
						onPress={() => {
							this._btnClick();
						}}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	slide: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	image: {
		width: width,
		height: height
	},
	dot: {
		backgroundColor: 'rgba(255,255,255,0.3)',
		width: 8,
		height: 8,
		borderRadius: 8,
		marginLeft: 3,
		marginRight: 3
	},
	activeDot: {
		backgroundColor: '#FFFFFF',
		width: 8,
		height: 8,
		borderRadius: 8,
		marginLeft: 3,
		marginRight: 3
	},
	logoContainer: {
		width: width,
		position: 'absolute',
		top: 85,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textContainer: {
		width: 150,
		position: 'absolute',
		bottom: 180,
		left: 30,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	text: {
		fontFamily: 'JetBrainsMono-Bold',
		color: '#FFFFFF',
		fontSize: 31,
		fontWeight: '600'
	},
	button: {
		width: width,
		alignContent: 'center',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'absolute',
		bottom: 81
	},
	darkLayer: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: '#000000',
		opacity: 0.6
	}
});

export default Onboarding;
