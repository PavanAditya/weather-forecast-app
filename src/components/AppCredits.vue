<template>
  <footer>
    <small>
      A Project by
      <b>
        <a href="https://pavanaditya.com" target="_blank" rel="noopener">
          <cite>Pavan Aditya M S</cite>
        </a>
      </b>
      --- Product Engineer at
      <a href="https://igotskill.in" target="_blank" rel="noopener">
        <b>IGS - Mindtree</b>
      </a>
    </small>
  </footer>
</template>

<script>
export default {
  name: 'AppCredits',

  props: {
    year: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
footer {
  text-align: center;
  position: absolute;
  bottom: 10px;
  visibility: hidden;
}

@media screen and (min-width: 450px) {
  footer {
    visibility: visible;
  }
}
</style>
