<template>
  <div class="signup container">
    <form class="card-panel" @submit.prevent="signup">
      <h2 class="center blue-grey-text">
        Sign up
      </h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email"/>
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password"  v-model="password" />
      </div>
      <div class="field">
        <label for="alias">Alias:</label>
        <input type="text" name="alias" v-model="alias" />
      </div>
      <p class="red-text center" v-if="feedback" v-html="feedback"></p>
      <div class="field center">
        <button class="btn blue-grey darken-1">Sign up</button>
      </div>
      Have an account? <router-link :to="{ name: 'Login' }">Log in</router-link>.
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
import firebase from 'firebase/app'

export default {
  name: 'Signup',
  data () {
    return {
      email: null,
      password: null,
      alias: null,
      feedback: null,
      slug: null
    }
  },
  methods: {
    signup () {
      if (this.alias && this.email && this.password) {
        this.slug = slugify(this.alias, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        let ref = db.collection('users').doc(this.slug)
        ref.get().then(doc => {
          if (doc.exists) {
            this.feedback = 'This alias already exists'
          } else {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                ref.set({
                  alias: this.alias,
                  geolocation: null,
                  user_id: cred.user.uid
                })
              })
              .then(() => {
                this.$router.push({ name: 'GMap' })
              })
              .catch(err => {
                console.log(err)
                this.feedback = err.message
              })
          }
        })
        console.log(this.slug)
      } else {
        this.feedback = 'Please fill out all fields'
      }
    }
  }
}
</script>

<style>
.signup {
  max-width: 400px;
  margin-top: 60px;
}

.signup h2 {
  font-size: 2.4em;
}

.signup .field {
  margin-bottom: 16px;
}
</style>
