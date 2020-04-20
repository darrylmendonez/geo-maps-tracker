<template>
  <div class="about container">
    <div class="card">
        <div class="card-content">
          <h2 class="center blue-grey-text">Geo Maps Tracker</h2>
          <p>This social media app tracks your location when given permission and allows you to see other user's locations an profiles. You are able to chat on their profile page along with other users.</p>
          <ul class="collection with-header">
            <li class="collection-header blue-grey lighten-5"><h6>Tools used:</h6></li>
            <li class="collection-item"><em>Vue.js</em> is the javascript framework to develop as a single-page application</li>
            <li class="collection-item"><em>Vuex</em> is used to manage state</li>
            <li class="collection-item"><em>Google Maps api</em> is used for the map component and markers are clickable to link to profile of user</li>
            <li class="collection-item"><em>Firebase Database</em> is used for its real-time database which allows for the chat feature</li>
            <li class="collection-item"><em>Firebase Authentication</em> is used for user registration and login</li>
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
