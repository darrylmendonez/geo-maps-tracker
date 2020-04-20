<template>
  <div class="about container">
    <div class="card">
        <div class="card-content">
          <h2 class="center blue-grey-text" v-html="this.$store.state.title"></h2>
          <p v-html="this.$store.state.aboutSection.description"></p>
          <ul class="collection with-header">
            <li class="collection-header blue-grey lighten-5"><h6>Tools used:</h6></li>
            <li class="collection-item" v-for="(tool, index) in this.$store.state.aboutSection.tools" v-html="tool" :key="index"></li>
          </ul>
        </div>
      </div>
    <p></p>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
.about {
  max-width: 400px;
  margin-top: 60px;
}

.about h2 {
  font-size: 2.4em;
}

</style>
