import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function SignInScrenn({ setIsLogInStatus }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (username === 'admin' && password === 'admin') {
        setIsLogInStatus(true);
      } else {
        Alert.alert('Invalid', 'Username or password is incorrect');
      }
    };
  
    return (
      <View style={styles.container}>
        <TextInput placeholder="Username" value={username} onChangeText={setUsername} style={styles.textFields} />
        <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.textFields} />
        <TouchableOpacity style={styles.logInButton} onPress={handleLogin}>
            <Text style={{color: 'white', textAlign: 'center'}}>
                LogIn
            </Text>
        </TouchableOpacity>
        
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    textFields: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 12
    },
    logInButton: {
        width: '80%',
        height: 40,
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 12,
        padding: 10,
        marginBottom: 10,
        border: 'none',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
})