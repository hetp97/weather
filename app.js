const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
<script>
const updateUI = (data)=> {

const cityDets = data.cityDets;
const weather = data.weather;
details.innerHTML =`
               <h5 class="my-3">${citydets}</h5>
                    <div class="my-3">${weather.WeatherText}</div>
           	<div class="display-4 my-4">
           	<span>${weather.Temperature.Metric.Value}</span>
           	<span>&deg;C</span>'/
     


           	</div>
           	`;

};            



if(card.classList.contains('d-none')){
	card.classList.remove('d-none');
}
const updateCity = async (city) => {


const cityDets = await getCity(city);


const weather = await getWeather(cityDets.key);

return {cityDets, weather};
};



cityForm.addEventListener('submit', e=>{

	e.preventDefault();


const city =cityForm.city.value.trim();
cityForm.reset();





updateCity(city)
 .then(data => console.log(data))
 .catch(err => console.log(err));
});
</script>








