# Proyecto Cotizador de Criptomonedas
- Los datos obtenidos se ejecutan desde una API.
- Creación del proyecto:
    - `npx react-native init MiProyecto --version 0.70`

## Tecnologías
1. React Native
1. Google Fonts
1. Picker
    - Comando de instalación:
    - `npm install @react-native-community/picker --save`
    - Si no lo acepta:
    - `npm install @react-native-picker/picker --save`

### Tipografía
- Google fonts
    - _Lato-Black_
    - _Lato-Regular_
1. **Nota**: para su instalación se creo el archivo: 
    - **_react-native.config.js_**
1. Dentro del archivo, se generó el siguiente código:
```
    module.exports = {
        project: {
            ios: {},
            android: {},
        },
        assets: ['./assets/fonts/']
    }
```
1. Se ejecutó el comando: 
    - `npx react-native-asset`