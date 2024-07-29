import React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

const RegisterDisplay = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>Bienvenido, ¡Qué bueno que quieras formar parte de esta comunidad!</Text>
        <TextInput style={styles.input} placeholder="Ingresa tu mail..." />
        <TextInput style={styles.input} placeholder="Ingresa tu contraseña..." secureTextEntry />
        <TextInput style={styles.input} placeholder="Ingresa nuevamente tu contraseña..." secureTextEntry />
        <Button title="Registrarse" onPress={() => navigation.navigate('LoginDisplay')} />
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
});

export default RegisterDisplay;
