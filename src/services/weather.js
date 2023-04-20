export async function getWeatherFrom () {
    const region_get = await fetch(`https://ipapi.co/json`)
    const {region} = await region_get.json()
    return fetch(`/api/get-weather?q=${region}`).then(res => res.json())
}