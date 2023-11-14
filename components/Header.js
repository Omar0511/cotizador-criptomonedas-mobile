import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native';

const Header = () => {
    <Text style={styles.encabezado}>Criptomonedas</Text>
};

const styles = StyleSheet.create
(
    {
        encabezado: {
            paddingTop: Platform.OS === 'ios' ? 50 : 10,
            fontFamily: 'Lalo-Black',
        },
    }
);

export default Header
