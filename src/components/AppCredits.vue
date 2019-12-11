<template>
  <footer>
    <small>
      A Project by
      <b>
        <a href="https://pavanaditya.com" target="_blank" rel="noopener">
          <cite>Pavan Aditya M S</cite>
        </a>
      </b>
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
    },
    blank: ' '
  }
}
</script>

<style lang="scss" scoped>
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
