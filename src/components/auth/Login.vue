<template>
  <div class="login container">
    <form class="card-panel" @submit.prevent="login">
      <h2 class="center blue-grey-text">Log in</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email"/>
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password"  v-model="password" />
      </div>
      <p v-if="feedback" v-html="feedback" class="red-text center"></p>
      <div class="field center">
        <button class="btn blue-grey darken-1">Login</button>
      </div>
      Don't have an account? <router-link :to="{ name: 'Signup' }">Sign up</router-link>.
      <p>
        quick log in creds:<br />
        <code class="pink-text">
        james@bond.com<br />
        123456
        </code>
      </p>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      feedback: null
    }
  },
  methods: {
    login () {
      if (this.email && this.password) {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(cred => {
            console.log(cred.user)
            this.$router.push({ name: 'GMap' })
          })
          .catch(err => {
            this.feedback = err.message
          })
        this.feedback = null
      } else {
        this.feedback = 'Please fill in both fields'
      }
    }
  }
}
</script>

<style>
.login {
  max-width: 400px;
  margin-top: 60px;
}

.login h2 {
  font-size: 2.4em;
}

.login .field {
  margin-bottom: 16px;
}
</style>
