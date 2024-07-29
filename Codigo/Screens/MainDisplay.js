import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const MainDisplay = ({ navigation }) => {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Desliza hacia arriba para descubrir el mundo de la alimentación saludable</Text>
        <Button title="Ir al Login" onPress={() => navigation.navigate('LoginDisplay')} />
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
    text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
    },
});

export default MainDisplay;
