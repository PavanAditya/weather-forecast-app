<template>
  <div id="app">
    <div class="app" :class="period">
      <WeatherApp :class="period"></WeatherApp>
      <AppCredits :year="year" :class="period"></AppCredits>
    </div>
  </div>
</template>

<script>
import WeatherApp from './components/WeatherApp'
import AppCredits from './components/AppCredits'

export default {
  name: 'App',

  components: {
    WeatherApp,
    AppCredits
  },

  data () {
    return {
      date: new Date
    }
  },

  computed: {
    year () {
      return this.date.getFullYear();
    },

    period () {
      let hour = this.date.getHours();

      return (hour > 5 && hour < 18) ? 'app--day' : 'app--night';
    }
  }
}
</script>

<style>
/** Global **/
@import url('https://fonts.googleapis.com/css?family=Roboto');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgba(255, 255, 255, 0.9);
}

a {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease-in;
}

/** App **/
.app {
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
}

.app--day {
  /*background: linear-gradient(to bottom right, #ffb610, #ffb610) no-repeat;*/
  background-color: #ffbf2e;
}

.app--night {
  /*background: linear-gradient(to bottom right, #171718, #171718) no-repeat;*/
  background-color: #171718;
}

.app--day a:hover {
  color: #ff4d00c4;
}

.app--night a:hover {
  color: #524db3;
}
</style>
