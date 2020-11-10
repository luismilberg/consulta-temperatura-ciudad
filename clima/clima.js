const axios = require('axios');
const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const appId = '3e4747dd67551e4c0ad77510f675075a';


const getClima = async (lat,lng) => {
    const params = `?lat=${lat}&lon=${lng}&appid=${appId}&units=metric`;
    const resp = await axios.get( urlBase + params );
    if(resp.data.length === 0){
        throw new Error(`Error!!`);
    }
    return resp.data.main.temp;
}

module.exports = {
    getClima
}