export async function getWeatherFrom () {
    const region_get = await fetch(`http://ip-api.com/json/?fields=regionName`)
    const {regionName} = await region_get.json()
    return fetch(`/api/get-weather?q=${regionName}`).then(res => res.json())
}