<template>
  <div>
    <section class="ui two column centered grid" style="position:relative;z-index:1">
      <div class="column">
        <form class="ui segment large form">
          <div class="ui message red" v-show="error">{{error}}</div>
          <div class="ui segment">
            <div class="field">
              <md-field>
                <label>住所を入力してください</label>
                <md-input v-model="address" ref="autocomplete"></md-input>
              </md-field>
              <!-- <div class="ui right icon input large" :class="{loading:spinner}">
                <input type="text" placeholder="住所を入力してください" v-model="address" ref="autocomplete" />
                <i class="dot circle link icon" @click="locatorButtonPressed"></i>
              </div>-->
            </div>
            <button class="ui button">Go</button>
          </div>
        </form>
      </div>
    </section>

    <section id="map" ref="map"></section>
  </div>
</template>

<script>
import axios from "axios";
const google = window.google;

export default {
  data() {
    return {
      address: "",
      error: "",
      spinner: false,
      apiKey: process.env.VUE_APP_GOOGLE_MAP_API
    };
  },
  mounted() {
    const autocomplete = new google.maps.places.Autocomplete(
      this.$refs["autocomplete"],
      {
        bounds: new google.maps.LatLngBounds(
          new google.maps.LatLng(35.994126, 139.742108)
        )
      }
    );

    autocomplete.addListener("place_changed", () => {
      var place = autocomplete.getPlace();

      this.showLocationOnTheMap(
        place.geometry.location.lat(),
        place.geometry.location.lng()
      );
    });
  },

  methods: {
    locatorButtonPressed() {
      this.spinner = true;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.getAddressFrom(
              position.coords.latitude,
              position.coords.longitude
            );

            this.showLocationOnTheMap(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          error => {
            this.error = error.message;
            this.spinner = false;
            // console.log(error.message);
          }
        );
      } else {
        this.spinner = false;
        console.log("Your browser does not support geolocation API ");
      }
    },
    getAddressFrom(lat, long) {
      axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
            lat +
            "," +
            long +
            "&key=" +
            this.apiKey
        )
        .then(response => {
          if (response.data.error_message) {
            this.error = response.data.error_message;
            console.log(response.data.error_message);
          } else {
            this.address = response.data.results[0].formatted_address;
            // console.log(response.data.results[0].formatted_address);
          }
          this.spinner = false;
        })
        .catch(error => {
          this.error = error.message;
          this.spinner = false;
          console.log(error.message);
        });
    },
    showLocationOnTheMap(latitude, longitude) {
      // Show & center the Map based oon
      var map = new google.maps.Map(this.$refs["map"], {
        zoom: 15,
        center: new google.maps.LatLng(latitude, longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map
      });
    }
  }
};
</script>


<style>
.ui.button,
.dot.circle.icon {
  background-color: #ff5a5f;
  color: white;
}

.pac-icon {
  display: none;
}

.pac-item {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

.pac-item:hover {
  background-color: #ececec;
}

.pac-item-query {
  font-size: 16px;
}

#map {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>