const lugar = require ('./lugar/lugar');
const clima = require('./clima/clima');
const { getLugarLatLng } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const tempCiudad = async (direccion) => {
    try {
        
        const data = await getLugarLatLng(direccion);
        const temperatura = await getClima(data.lat, data.lng);
        return(`La tempertatura actual de la ciudad ${direccion} es de ${temperatura}°C`);
    
    } catch (error) {
        return(error);
    }
    
}

tempCiudad(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));