import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Cotizacion = (
    {
        resultado,

    }
) => {
    // Comprobar si el objeto esta vacío
    if (Object.keys(resultado).length === 0)
    {
        return null;
    }

    return (
        <Text>
            El precio es: {resultado.PRICE}
        </Text>
    );
};

const styles = StyleSheet.create
(
    {

    }
);

export default Cotizacion
