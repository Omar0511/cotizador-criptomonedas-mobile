# Proyecto Cotizador de Criptomonedas
1. Los datos obtenidos se ejecutan desde una API.
    - [API](https://www.cryptocompare.com/)
1. Dentro de la página, nos vamos a:
    1. API
    1. Documentation
    1. TopLists
    1. TopList by Market Cap Full Data
    1. GET, copiamos la ruta:
        - [RUTA](https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD)

1. Creación del proyecto:
    - `npx react-native init MiProyecto --version 0.70`

## Tecnologías
1. React Native
1. Google Fonts
1. Picker
    - Comando de instalación:
    - `npm install @react-native-community/picker --save`
    - Si no lo acepta:
    - `npm install @react-native-picker/picker --save`
1. Axios
    - `npm i --save axios`

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