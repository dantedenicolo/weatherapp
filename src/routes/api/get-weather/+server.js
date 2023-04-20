const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2a32c9180bmshb6fda56a4a9c9acp19181fjsn7e5bd67d7904',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};


export async function GET(event) {
    const { searchParams } = event.url
    const query = searchParams.get('q') ?? 'Buenos Aires'  
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTIONS)
    
        const data = await response.json()

        const { location, current } = data;
        const { name } = location;
        const { 
            condition, 
            humidity, 
            feelslike_c,
            temp_c, 
            wind_kph,
            is_day 
        } = current;
        const { icon, text } = condition;

        const body = {
            conditionIcon: icon,
            conditionText: text,
            locationName: name,
            humidity,
            isDay: is_day,
            feelsLike: feelslike_c,
            temperature: temp_c,
            windSpeed: wind_kph,
        }
    
    return new Response(
        JSON.stringify(body)
    )
}