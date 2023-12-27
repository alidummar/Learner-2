import React, { useState } from 'react';
import { ImageBackground, View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import axios from 'axios';
import * as Keychain from 'react-native-keychain';

const LoginScreen = ({ navigation }) => {
    const [associatedEmail, setAssociatedEmail] = useState('');
    const [studentName, setStudentName] = useState('');
    const [pin, setPin] = useState('');

    const handleLogin = () => {
        // Logic to handle login
    axios.post('https://spell-to-excel-7bacf3b9891e.herokuapp.com/api/student-login/', {
        associated_email: associatedEmail,
        student_name: studentName, 
        student_pin: pin 
    })
    .then(response => {
        // Handle success
        console.log(response.data);
        const { refresh, access } = response.data;
        // You can store these tokens in AsyncStorage or your state management solution
        // Navigate to next screen or show success message

        Keychain.setGenericPassword('tokens', JSON.stringify({ refresh, access }))
            .then(() => {
                navigation.navigate('StudentHomePage');
            })
            .catch(error => {
                console.error("Keychain couldn't be accessed!", error);
            });

    })
    .catch(error => {
        // Handle error
        console.log(error);
        
        // Show error message
        Alert.alert("Login failed", "Invalid credentials")
    });
        
    };

    return (
        <ImageBackground 
            source={require('../assets/1.jpeg')} 
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Teacher or Parent Email"
                    value={associatedEmail}
                    onChangeText={setAssociatedEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Student Name"
                    value={studentName}
                    onChangeText={setStudentName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Pin"
                    value={pin}
                    secureTextEntry
                    onChangeText={setPin}
                />
                <Button title="Login" onPress={handleLogin} />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1, // Fill the entire screen
        width: '100%',
        height: '100%',
    },
    container: {
        position: 'absolute', // Position the container independently
        left: '5%', 
        right: '5%',
        bottom: 100, 
        padding: 20,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        alignSelf: 'center', // Center the container
    },
    input: {
        height: 40,
        marginVertical: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
});

export default LoginScreen;