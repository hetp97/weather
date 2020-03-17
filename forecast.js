const key= 'XfHZRGr7ubMCQQ2I1YZ0AFIQlXoQ6nJL';



const getWeather = async() => {

const base = 'https://dataservice.accuweather.com/currentconditions/v1/204842';
const query =`?apikey=${key}`;



const response = await fetch(base + query);
const data = await response.json();
return data[0];
};


const getCity = async (city) =>{

const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';

const query=`?apikey=${key}&q=${city}`;
const response = await fetch(base + query);
const data = await response.json();
return data[0];

};


//getWeather('204842');

