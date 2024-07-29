import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const LoginDisplay = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Hola, ¡Qué gusto verte otra vez!</Text>
        <TextInput style={styles.input} placeholder="Ingresa tu mail..." />
        <TextInput style={styles.input} placeholder="Ingresa tu contraseña..." secureTextEntry />
        <Button title="Iniciar sesión" onPress={() => navigation.navigate('MainDisplay')} />
        <Text style={styles.link} onPress={() => navigation.navigate('RegisterDisplay')}>¿No tienes una cuenta? Regístrate ahora</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8BC34A',
    },
    title: {
    fontSize: 22,
    marginBottom: 20,
    color: '#fff',
    },
    input: {
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#fff',
    width: '80%',
    },
    link: {
    marginTop: 10,
    color: '#fff',
    textDecorationLine: 'underline',
    },
});

export default LoginDisplay;
