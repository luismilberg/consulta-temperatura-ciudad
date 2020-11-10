const axios = require('axios');
const apiKey = 'edc0e354dce94355b1d64a96cbcec7db'


const getLugarLatLng = async ( direccion ) => {
    
    const encoderUrl = encodeURI( direccion );
    
    const instance = axios.create({
        baseURL: `https://api.opencagedata.com/geocode/v1/json?q=${encoderUrl}&key=${apiKey}`
    });
    
    const resp = await instance.get();

    if( resp.data.results.length === 0){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.results[0];
    const dir = `${data.components.city}, ${data.components.state}`;
    const lat = data.geometry.lat;
    const lng = data.geometry.lng;
    

            return {
                dir,
                lat,
                lng 
            }
    
}

module.exports = {
    getLugarLatLng
}