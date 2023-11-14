import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Formulario = () => 
{
    const [moneda, guardarMoneda] = useState('');
    const [criptomoneda, setCriptomoneda] = useState('');

    const obtenerMoneda = moneda => {
        guardarMoneda(moneda);
    };

    return (
        <View>
            <Text style={styles.label}>Moneda</Text>

            <Picker
                selectedValue={moneda}
                onValueChange={ moneda => obtenerMoneda(moneda) }
            >
                <Picker.Item label='- Seleccione -' value="" />
                <Picker.Item label='Dolar EUA' value="USD" />
                <Picker.Item label='Peso Mexicano' value="MXN" />
                <Picker.Item label='Euro' value="EUR" />
                <Picker.Item label='Libra Esterlina' value="GBP" />
            </Picker>

            <Text style={styles.label}>Criptomoneda</Text>
        </View>
    );
};

const styles = StyleSheet.create
(
    {
        label: {
            fontFamily: 'Lato-Black',
            textTransform: 'uppercase',
            fontSize: 22,
            marginVertical: 20,
        },  
    }
);

export default Formulario
