export async function getWeatherFrom () {
    const region_get = await fetch(`https://ipapi.co/json`)
    const {city, region} = await region_get.json()
    return fetch(`/api/get-weather?q=${city}${region}`).then(res => res.json())
}