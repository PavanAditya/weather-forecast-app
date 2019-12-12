<template>
  <section>
    <div class="location" id="loc" @click="openDp">{{ location }}</div>
    <div class="weather__description" id="desc">{{ description }}</div>
    <img class="weather__icon" :src="icon" :alt="description" />
    <v-select :options="options" @input="getWeather" label="city" dense solo id="dpDown"></v-select>
  </section>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'

Vue.component('v-select', vSelect)

export default {
  name: 'Weather',
  props: {
    location: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      options: [
        'Agartala',
        'Agra',
        'Agumbe',
        'Ahmedabad',
        'Aizawl',
        'Ajmer',
        'Alappuzha Beach',
        'Allahabad',
        'Alleppey',
        'Almora',
        'Amarnath',
        'Amritsar',
        'Anantagir',
        'Andaman and Nicobar Islands',
        'Araku valley',
        'Aurangabad',
        'Ayodhya',
        'Badrinath',
        'Bangalore',
        'Baroda',
        'Bastar',
        'Bhagalpur',
        'Bhilai',
        'Bhimtal',
        'Bhopal',
        'Bhubaneswar',
        'Bhuj',
        'Bidar',
        'Bilaspur',
        'Bodh Gaya',
        'Calicut',
        'Chail',
        'Chamba',
        'Chandigarh',
        'Chennai',
        'Chennai Beaches',
        'Cherai',
        'Cherrapunji',
        'Chidambaram',
        'Chikhaldara Hills',
        'Chopta',
        'Coimbatore',
        'Coonoor',
        'Coorg',
        'Corbett National Park',
        'Cotigao Wild Life Sanctuary',
        'Cuttack',
        'Dadra and Nagar Haveli',
        'Dalhousie',
        'Daman and Diu',
        'Darjeeling',
        'Dehradun',
        'Delhi',
        'Devikulam',
        'Dhanaulti',
        'Dharamashala',
        'Dindigul',
        'Dudhwa National Park',
        'Dwaraka',
        'Faridabad',
        'Gandhinagar',
        'Gangotri',
        'Gangtok',
        'Gir Wildlife Sanctuary',
        'Goa',
        'Great Himalayan National Park',
        'Gulmarg',
        'Gurgaon',
        'Guruvayoor',
        'Guwahati',
        'Gwalior',
        'Hampi',
        'Haridwar',
        'Hogenakkal',
        'Horsley Hills',
        'Hyderabad',
        'Idukki',
        'Imphal',
        'Indore',
        'Itangar',
        'Jabalpur',
        'Jaipur',
        'Jaisalmer',
        'Jalandhar',
        'Jammu',
        'Jamshedpur',
        'Jodhpur',
        'Kanchipuram',
        'Kanha National Park',
        'Kanpur',
        'Kanyakumari',
        'Kargil',
        'Karwar',
        'Kausani',
        'Kedarnath',
        'Keoladeoghana National Park',
        'Khajuraho',
        'Kochi',
        'Kodaikanal',
        'Kolkata',
        'Kollam',
        'Konark',
        'Kotagiri',
        'Kottakkal and Ayurveda',
        'Kovalam',
        'Kovalam and Ayurveda',
        'Kudremukh',
        'Kullu',
        'Kumaon',
        'Kumarakom',
        'Kumarakom and Ayurveda',
        'Kumarakom Bird Sanctuary',
        'Kurukshetra',
        'Lakshadweep',
        'Lucknow',
        'Ludhiana',
        'Madurai',
        'Mahabalipuram',
        'Malpe Beach',
        'Manas National Park',
        'Mangalore',
        'Maravanthe Beach',
        'Margoa',
        'Mount Abu',
        'Mumbai',
        'Munnar',
        'Mussoorie',
        'Mysore',
        'Nahsik',
        'Nalanda',
        'Nanda Devi National Park',
        'Nandi Hills',
        'Netravali Wild Life Sanctuary',
        'Ooty',
        'Orchha',
        'Pahalgam',
        'Palakkad',
        'Panchgani',
        'Patna',
        'Patnitop',
        'Pattadakkal',
        'Periyar Wildlife Sanctuary',
        'Pithoragarh',
        'Pondicherry',
        'Pune',
        'Puri',
        'Pushkar',
        'Raipur',
        'Rajaji National Park',
        'Rajgir',
        'Rameshwaram',
        'Ranchi',
        'Ranganthittu Bird Sanctuary',
        'Ranikhet',
        'Ranthambore',
        'Rishikesh',
        'Rourkela',
        'Sanchi',
        'Saputara',
        'Sariska Wildlife Sanctuary',
        'Shillong',
        'Shimla',
        'Sohna_Hills',
        'Srinagar',
        'Sunderbans',
        'Surat',
        'Tezpur',
        'Thanjavur',
        'Thiruvananthapuram',
        'Thrissur',
        'Tirunelveli',
        'Tirupati',
        'Trichy',
        'Udaipur',
        'Ujjain',
        'Vaishali',
        'Valley of Flowers',
        'Varanasi',
        'Varkala and Ayurveda',
        'Vijayawada',
        'Vishakhapatnam',
        'Vrindhavan',
        'Warangal',
        'Wayanad',
        'Wayanad Wildlife Sanctuary',
        'Yercaud',
        'Zanskar'
      ]
    }
  },
  methods: {
    getWeather: function () {
      document.getElementById('loc').style.opacity = '1';
      document.getElementById('desc').style.opacity = '1';
      document.getElementById('dpDown').style.opacity = '0';
      this.$emit('clicked', event.target.outerText)
    },
    openDp: function () {
      document.getElementById('dpDown').style.opacity = '1';
      document.getElementById('dpDown').click();
      document.getElementById('loc').style.opacity = '0';
      document.getElementById('desc').style.opacity = '0';
    }
  }
}
</script>

<style lang="scss">
section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.location {
  text-transform: uppercase;
  font-weight: bold;
}

.location:hover {
  cursor: pointer;
  color: lime;
}

.weather__description {
  text-transform: lowercase;
  margin-left: 10%;
  margin-right: 10%;
  text-align: center;
}

.weather__description:first-letter {
  text-transform: uppercase;
}

.weather__icon {
  width: 12em;
  padding-bottom: 9em;
}
.v-select {
  position: fixed;
  background: #ffffff4a;
  opacity: 0;
  margin-top: 20px;
  .vs__open-indicator {
    display: none;
  }
  ul {
    list-style-type: none !important;
    padding-top: 20px;
    padding-left: 10px;
    max-height: 300px;
    overflow: auto;
  }
  .vs__selected {
    display: none !important;
  }
  input {
    width: 220px !important;
    background: #ffffff4a !important;
    // border: 1px solid blue !important;
  }
}
.v-select:hover {
  cursor: pointer;
}
.vs--open {
  opacity: 1;
}
</style>
