import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.upperHalf}>
                <Image
                    source={require('../assets/WelcomeView/Welcome.gif')}
                    style={styles.image}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                    <Image
                        source={require('../assets/WelcomeView/LoginButton.png')}
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.learnMoreButton} onPress={() => {/* Handle button press */}}>
                    <Image
                        source={require('../assets/WelcomeView/LearnMore.png')}
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
  
    },
    upperHalf: {
        flex: 1,
        justifyContent: 'flex-start', // Aligns content to the start, pushing the image up
    },
    lowerHalf: {
        flex: 1,
        // Styles for the bottom half of the screen
    },
    image: {
        width: '100%',
        height: screenHeight / 2,
        resizeMode: 'contain',
        alignSelf: 'center', // Ensures the image is centered horizontally
        marginTop: screenHeight * 0.1, // Adjust this value to shift the image higher as needed
        backgroundColor: 'black', // Set background color to match the page's background color
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Adjust as needed
        alignItems: 'center',
        width: '80%', // Adjust width of the container as needed
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Adjust as needed
        alignItems: 'center',
        width: '100%', // Adjust width of the container as needed
        position: 'absolute', // Position the container absolutely if needed
        bottom: screenHeight * 0.15,
    },
    loginButton: {
        width: screenWidth * 0.5, // 40% of the screen width
        height: screenHeight * 0.1, // 10% of the screen height
        justifyContent: 'center',
        alignItems: 'center',
        // Removed absolute positioning
    },
    learnMoreButton: {
        // Style for your Learn More button
        width: screenWidth * 0.5,
        height: screenHeight * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonImage: {
        width: '100%', // Make the image fill the button
        height: '100%', // Make the image fill the button
        resizeMode: 'contain', // This ensures the image scales correctly within the button
    },
});

export default WelcomeScreen;