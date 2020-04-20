<template>
  <div class="navbar">
    <nav class="blue-grey darken-1 darken-1">
      <div class="container">
        <router-link :to="{ name: 'GMap' }" class="brand-logo left hide-on-small-only">Geo Maps Tracker</router-link>
        <ul class="right">
          <li v-if="!user">
            <router-link :to="{ name: 'Signup' }">
              Sign up
            </router-link>
          </li>
          <li v-if="user">
            <router-link :to="{ name: 'ViewProfile', params: { id: this.$store.state.paramsId.newParamsId } }" v-html="user.email"></router-link>
          </li>
          <li v-if="user">
            <router-link :to="{ name: 'GMap' }">Map</router-link>
          </li>
          <li v-if="!user">
            <router-link :to="{ name: 'Login' }">
              Log in
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'About' }">
              About
            </router-link>
          </li>
          <li v-if="user">
            <a @click="logout">Log out</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'App',
  data () {
    return {
      user: null
    }
  },
  methods: {
    logout () {
      firebase.auth().signOut()
        .then(() => {
          this.$router.push({ name: 'Login' })
        })
    }
  },
  created () {
    // let user = firebase.auth().currentUser
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
      } else {
        this.user = null
      }
    })
  }

}
</script>

<style>

</style>
