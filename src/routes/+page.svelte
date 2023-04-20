<script>
    import {getWeatherFrom} from '../services/weather'
    const weatherPromise = getWeatherFrom()
    import WeatherFooter from '../components/weather-footer.svelte'
    import WeatherIcon from '../components/weather-icon.svelte'
</script>

{#await weatherPromise then weather }
<div class:night={weather.isDay !== 1} class:day={weather.isDay === 1}>
    <section>
        <h1>{weather.locationName}</h1>
        <h2>{weather.temperature}°</h2>
        <h3>{weather.conditionText}</h3>
        <WeatherIcon icon={weather.conditionIcon} alt={weather.conditionText} />
    </section>
    <WeatherFooter Humidity={weather.humidity} Windspeed={weather.windSpeed} FeelsLike={weather.feelsLike}/>
</div>
{/await}

<style>
    section {
        padding: 16px;
    }
        
    h1 {
        font-weight: 300;
        color: white;
        text-transform: uppercase;
        padding: 16px 0 0 0;
    }

    h2 {
        font-size: 120px;
        font-weight: 300;
        color: white;
        text-transform: uppercase;
        padding: 0;
    }

    h3 {
        font-weight: 700;
        transform: rotate(90deg);
        position: absolute;
        top: 56px;
        right: 12px;
    }
    .night {
        background-image: url('https://wallpapercave.com/wp/wp3236587.jpg');
        background-size: cover;
    }

    .day {
        background-image: url('https://w0.peakpx.com/wallpaper/116/146/HD-wallpaper-clear-blue-sky-calm-clean-color-gradient-simple.jpg');
        background-size: cover;
    }
    div {
        aspect-ratio: 9 / 16;
        width: 400px;
        max-width: 100%;
        display: block;
        border: 1px solid #fff;
        box-shadow: 0 0 100px rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        position: relative;
        background-size: cover;
    }
</style>