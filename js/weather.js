const APIKey = '25ueVvXKYNV2zCt8H2qrGVg9Z8INa1XZ'
const getCityUrl = cityName =>
  `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getCityData = async cityName => {
  try {
    const cityUrl = getCityUrl(cityName)
    const response = await fetch(cityUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }


    // console.log(await response.json());
    const [cityData] = await response.json() 
    console.log(cityData);
    return cityData
    debugger
  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const getCityWeather = async cityName => {
  try {
    const { Key } = await getCityData(cityName)
    console.log(Key);
    const cityWeatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apiKey=${APIKey}`
    console.log(cityWeatherUrl);
    debugger
    const response = await fetch(cityWeatherUrl)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    const [cityWeatherData] = await response.json() 
    debugger
    return cityWeatherData
    
  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

getCityWeather('São paulo')
