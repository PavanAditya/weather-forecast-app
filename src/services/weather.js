class WeatherForecast {

  constructor() {
    // ? Api key for accessing (https://home.openweathermap.org/) apis
    this.key = '8c3f8059c4d2260b4130ad89c9c3b0f0';
    this.cloudiness = 0;
    this.windSpeed = 0;
    this.humidity = 0;

    this.temperatureValue = 0;
    this.temperatureHigh = 0;
    this.temperatureLow = 0;

    this.location = ' ';
    this.description = 'Please connect to internet to fetch latest forecast :)';
    this.weatherIcon = require('../assets/icons/weather/cloud.svg');

    this.update();
  }

  // ? Geo Location Update using Navigator (https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)
  update () {
    if (navigator.onLine) {
      navigator.geolocation.getCurrentPosition(position => this.updateForecast(position));
    }
  }

  // ? Requesting the api call to the weather api using the current location
  async updateForecast (position) {
    let data = null;

    try {
      data = await this.getForecast(position.coords);
    } catch (e) {
      data = this.getErrorData();
    }

    this.populate(data);
  }

  // ? Fetch call for api request
  async getForecast (coordinates) {
    let appId = this.key; // ? API key for the app request
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${appId}&units=metric`;

    let response = await fetch(endpoint);

    return await response.json();
  }

  // ! Data Error
  getErrorData () {
    return {
      clouds: { all: 0 },
      wind: { speed: 0 },
      main: {
        humidity: 0,
        temp: 0,
        temp_max: 0,
        temp_min: 0,
      },
      weather: [
        {
          id: 0,
          description: `OOppss..., Error occured`
        }
      ],
      name: null,
      sys: {
        country: null
      }
    };
  }

  // ? Response object data
  populate (data) {
    this.cloudiness = data.clouds.all;
    this.windSpeed = data.wind.speed;
    this.humidity = data.main.humidity;
    this.temperatureValue = Math.round(data.main.temp);
    this.temperatureHigh = Math.round(data.main.temp_max);
    this.temperatureLow = Math.round(data.main.temp_min);
    this.location = this.formatLocation(data.name, data.sys.country);
    this.description = data.weather[0].description;
    this.weatherIcon = this.getWeatherIcon(data.weather[0].id);
  }
}

export default WeatherForecast;
