<template>
  <div>
    <!-- This is the nav bar -->
    <v-toolbar color="orange">
      <v-toolbar-title class="pl-4 black--text">
        <h3>
          <span class="font-weight-light">Our</span>
          <span class="font-weight-regular">Website</span>
        </h3>
      </v-toolbar-title>
    </v-toolbar>
    <!-- This is the login -->
    <v-container fluid>
      <v-row align="center" justify="center" class="py-15 my-15">
        <v-col cols="12" md="4" sm="8">
          <v-window reverse>
            <v-window-item>
              <v-card color="orange" height="320px" class="pa-auto rounded-xl">
                <v-row align="center" justify="center">
                  <v-col cols="8" md="8">
                    <v-card
                      class="px-1 brown lighten-3 rounded-0"
                      elevation="10"
                    >
                      <v-card-text>
                        <h2 class="pa-md-auto pa-xs-auto ma-xs-auto">
                          Welcome To Our Login Page
                        </h2>
                      </v-card-text>
                    </v-card>
                    <v-form lazy-validation class="my-10">
                      <v-text-field
                        hint="This field should contain your phone number."
                        label="UserName"
                        required
                        outlined
                        dense
                        v-model="Userphone"
                      >
                      </v-text-field>
                      <v-text-field
                        hint="This field should contain your National Code."
                        label="Password"
                        required
                        outlined
                        dense
                        v-model="Usercode"
                      >
                      </v-text-field>
                      <v-btn
                        :loading="loading"
                        :disabled="loading"
                        color="success"
                        v-on:click="[(loader = 'loading'), Test()]"
                      >
                        Log Me In
                        <template v-slot:loader>
                          <span>Loading...</span>
                        </template>
                      </v-btn>
                    </v-form>
                  </v-col>
                </v-row>
              </v-card>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      loader: null,
      loading: false,
    };
  },
  props: {
    source: String,
  },

  methods: {
    Test() {
      axios
        .post("https://alaatv.com/api/v2/login", {
          mobile: this.$store.getters['UserModules/User'].PhoneNumber,
          password: this.$store.getters['UserModules/User'].NationalCode
        })
        .then(response => {
          this.$router.push("/form");
          this.$store.state.Userid = response.data.data.user.id;
          this.$store.state.AccessToken = response.data.data.access_token;
          this.$store.commit(
            "UserModules/setPhoneValue",
            response.data.data.user.mobile
          );
          this.$store.commit(
            "UserModules/setCodeValue",
            response.data.data.user.national_code
          );
          this.$store.commit(
            "UserModules/setNameValue",
            response.data.data.user.first_name
          );
          this.$store.commit(
            "UserModules/setLastNameValue",
            response.data.data.user.last_name
          );
          this.$store.commit(
            "UserModules/setAddressValue",
            response.data.data.user.address
          );
          this.$store.commit(
            "UserModules/setSchoolValue",
            response.data.data.user.school
          );
          this.$store.commit(
            "UserModules/setMajorValue",
            response.data.data.user.major
          );
          this.$store.commit(
            "UserModules/setGradeValue",
            response.data.data.user.grade
          );
          this.$store.commit(
            "UserModules/setGenderValue",
            response.data.data.user.gender
          );
          this.$store.commit(
            "UserModules/setCityValue",
            response.data.data.user.city
          );
          this.$store.commit(
            "UserModules/setAgeValue",
            response.data.data.user.info
          );
        })
        .catch(error => {
          console.log(error);
        });
    },
  },

  computed: {
    Userphone: {
      get() {
        return this.$store.getters['UserModules/User'].PhoneNumber;
      },
      set(value) {
        this.$store.commit("UserModules/setPhoneValue", value);
      },
    },
    Usercode: {
      get() {
        return this.$store.getters['UserModules/User'].NationalCode;
      },
      set(value) {
        this.$store.commit("UserModules/setCodeValue", value);
      },
    },
  },

  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },
  created () {
    
  }
};
</script>
