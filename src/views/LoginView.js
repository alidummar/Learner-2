import React, { useState } from 'react';
import { ImageBackground, View, TextInput, Button, StyleSheet, Alert} from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [classCode, setClassCode] = useState('');

    const handleLogin = () => {
        // Logic to handle login
        
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
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    secureTextEntry
                    onChangeText={setPassword}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Class Code"
                    value={classCode}
                    secureTextEntry
                    onChangeText={setClassCode}
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