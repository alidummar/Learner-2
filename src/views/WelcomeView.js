import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const screenHeight = Dimensions.get('window').height;

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.upperHalf}>
                <Image
                    source={require('../assets/WelcomeView/Welcome 8.gif')}
                    style={styles.image}
                />
            </View>
            <View style={styles.lowerHalf}>
                {/* Other components for the bottom half of the screen can go here */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
  
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
        marginTop: -10, // Adjust this value to shift the image higher as needed
        backgroundColor: 'black', // Set background color to match the page's background color
    },
});

export default WelcomeScreen;