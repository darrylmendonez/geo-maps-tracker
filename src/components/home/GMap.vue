<template>
  <div>
    <div class="map">
      <div id="map" class="google-map"></div>
    </div>
    <div class="guide"><div class="row">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-content">
          <p>Scroll or zoom around the map to find markers. Click on a marker to participate in a user's conversation</p>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import db from '@/firebase/init'

export default {
  name: 'GMap',
  data () {
    return {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  methods: {
    renderMap () {
      const google = window.google
      const map = new google.maps.Map(document.getElementById('map'), {
        center: {
          lat: this.lat,
          lng: this.lng
        },
        zoom: 6,
        maxZoom: 15,
        mixZoom: 3,
        streetViewControl: false
      })
      db.collection('users').get().then(users => {
        users.docs.forEach(doc => {
          let data = doc.data()
          if (data.geolocation) {
            let marker = new google.maps.Marker({
              position: {
                lat: data.geolocation.lat,
                lng: data.geolocation.lng
              },
              map
            })
            // add click event to marker
            marker.addListener('click', () => {
              console.log(doc.id)
              this.$router.push({ name: 'ViewProfile', params: { id: doc.id } })
            })
          }
        })
      })
      if (map === undefined) {
        console.log('map = ', map)
      }
    }
  },
  mounted () {
    // get current user
    let user = firebase.auth().currentUser
    // get user geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        this.lat = pos.coords.latitude
        this.lng = pos.coords.longitude
        // find the user record and then update the geocoords
        db.collection('users').where('user_id', '==', user.uid).get()
          .then(snapshot => {
            snapshot.forEach((doc) => {
              db.collection('users').doc(doc.id).update({
                geolocation: {
                  lat: pos.coords.latitude,
                  lng: pos.coords.longitude
                }
              })
              let paramsId = doc.id
              this.$store.commit({ type: 'setParamsId', newParamsId: paramsId })
              this.$store.dispatch('setParamsId', {
                newParamsId: paramsId
              })
            })
          })

        this.renderMap()
      }, (err) => {
        console.log(err)
        this.renderMap()
      }, { maximumAge: 60000, timeout: 3000 })
    } else {
      // position center by default values
      this.renderMap()
    }
  }
}
</script>

<style>
  .google-map {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    background: #fff;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .guide {
    position: absolute;
    bottom: 0;
    left: 0;
  }

</style>
