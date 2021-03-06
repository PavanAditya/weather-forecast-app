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

  // ? Updating the location based on users selection

  async updateLocation (location) {
    let appId = this.key; // ? API key for the app request
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${appId}`;

    let response = await fetch(endpoint);
    // console.log(await response.json());
    const resp = await response.json();
    if (resp.cod === '404') {
      this.updateForecast({}, 'err');
    } else {
      this.updateForecast({
        coords: {
          latitude: resp.coord.lat,
          longitude: resp.coord.lon,
        }
      });
    }
  }

  // ? Geo Location Update using Navigator (https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)
  update () {
    if (navigator.onLine) {
      navigator.geolocation.getCurrentPosition(position => this.updateForecast(position, ''));
    }
  }

  // ? Requesting the api call to the weather api using the current location
  async updateForecast (position, error) {
    let data = null;
    if (error === 'err') {
      data = this.getErrorData();
    } else {
      try {
        data = await this.getForecast(position.coords);
      } catch (e) {
        data = this.getErrorData();
      }
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
          description: `City Not Found. Please refresh for current city or selecting another city.`
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

  // ? Get current city and location
  formatLocation (city, country) {
    if (city === null && country === null) {
      return '';
    }

    return `${city}, ${country}`;
  }

  // ? Getting the weather icon based on id, @param {Number} id - Weather ID.
  getWeatherIcon (id) {
    if (this.isThunderstorm(id)) {
      return require('../assets/icons/weather/thunderstorm.svg');
    }

    if (this.isDrizzle(id) || this.isRain(id)) {
      return require('../assets/icons/weather/rain.svg');
    }

    if (this.isSnow(id)) {
      return require('../assets/icons/weather/snow.svg');
    }

    return require('../assets/icons/weather/cloud.svg');
  }

  // ? Thunderstorm category check, @param {Number} id - Weather ID.
  isThunderstorm (id) {
    return id > 199 && id < 233;
  }

  // ? Drizzle category check, @param {Number} id - Weather ID.
  isDrizzle (id) {
    return id > 299 && id < 322;
  }

  // ? Rain category check, @param {Number} id - Weather ID.
  isRain (id) {
    return id > 499 && id < 532;
  }

  // ? Snow category check, @param {Number} id - Weather ID.
  isSnow (id) {
    return id > 599 && id < 623;
  }
}

export default WeatherForecast;
