<template>
  <div>
    <h1>Data</h1>
    <v-btn small elevation="10" color="blue" v-on:click="Get"
      >getting info</v-btn
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    Get() {
      axios
        .get(
          "https://alaatv.com/api/v2/megaroute/getUserFormData"
        )
        .then(response => {
          console.log(response.data.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
