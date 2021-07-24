<template>
  <div>
    <!-- This is nav bar -->
    <nav>
      <v-app-bar app color="orange">
        <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="black--text">
          <h3>
            <span class="font-weight-light">Our</span>
            <span class="font-weight-regular">Website</span>
          </h3>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text v-on:click="goHome">
          <span class="font-weight-regular">Sign Out</span>
          <v-icon class="pl-4">mdi-export</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer
        class="warning"
        v-model="drawer"
        app
        absolute
        temporary
        overlay-opacity="0.1"
      >
        <v-list>
          <v-list-item class="pl-15 ml-2">
            <v-list-item-avatar height="100" width="100">
              <v-img
                src="https://cdn.alaatv.com/upload/images/profile/default_avatar.jpg?w=100&h=100"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </v-list>
        <v-row align="center" justify="center">
          <v-col cols="12" class="pl-7">
            <v-btn text v-on:click="editable">
              <v-icon>mdi-pen</v-icon>
              <span class="ml-2">Edit your profile</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-navigation-drawer>
    </nav>
    <!-- This is the Main Form -->
    <div>
      <v-container fluid class="mt-15 pa-12">
        <v-row justify="center" align="center">
          <v-col cols="12" md="6">
            <v-card ref="form" class="mx-auto" outlined>
              <v-card-text>
                <v-row justify="center">
                  <v-col cols="12" md="6" sm="6">
                    <v-text-field
                      v-model="first"
                      label="First Name"
                      placeholder="First Name"
                      clearable
                      :disabled="disabler"
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6" sm="6">
                    <v-text-field
                      v-model="last"
                      label="Last Name"
                      placeholder="Last Name"
                      clearable
                      :disabled="disabler"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" sm="6">
                    <v-text-field
                      v-model="phone"
                      label="Phone Number"
                      placeholder="Your Phone Number"
                      clearable
                      :disabled="disabler"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" sm="6">
                    <v-text-field
                      v-model="code"
                      label="National Code"
                      placeholder="Your National Code"
                      clearable
                      :disabled="disabler"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2" sm="2">
                    <v-text-field
                      type="number"
                      v-model="age"
                      label="Age"
                      placeholder="Your Age"
                      :disabled="disabler"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="4" sm="4">
                    <v-overflow-btn
                      v-model="province"
                      label="province"
                      :items="provinceItems"
                      item-text="title"
                      item-value="id"
                      editable
                      dense
                      :disabled="disabler"
                    ></v-overflow-btn>
                  </v-col>
                  <v-col cols="12" md="4" sm="4">
                    <v-overflow-btn
                      v-model="cities"
                      label="City"
                      :items="FilteredItems"
                      item-text="title"
                      item-value="id"
                      editable
                      dense
                      :disabled="disabler"
                    ></v-overflow-btn>
                  </v-col>
                  <v-col cols="12" md="2" sm="2">
                    <v-select
                      v-model="gender"
                      label="Gender"
                      :items="genderItems"
                      item-text="title"
                      item-value="id"
                      :disabled="disabler"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="2" sm="2">
                    <v-select
                      v-model="grade"
                      label="Grade"
                      :items="gradeItems"
                      item-text="title"
                      item-value="id"
                      :disabled="disabler"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="4" sm="4">
                    <v-select
                      v-model="major"
                      label="Major"
                      :items="majorItems"
                      item-text="title"
                      item-value="id"
                      :disabled="disabler"
                    ></v-select>
                  </v-col>
                  <v-col cols="12" md="6" sm="6">
                    <v-text-field
                      type="text"
                      placeholder="School Name"
                      label="School"
                      v-model="school"
                      :disabled="disabler"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      type="text"
                      placeholder="Your Address"
                      label="Address"
                      v-model="address"
                      :disabled="disabler"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-btn text color="blue" v-on:click="Submit"
                    >Submit</v-btn
                  >
                </v-row>
                <br />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      drawer: false,
      disabler: true,
      provinceItems: [],
      genderItems: [],
      gradeItems: [],
      cityItems: [],
      majorItems: []
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    Submit() {
      axios
        .post(
          this.urlForPut(),
          {
            _method: "PUT",
            mobile: this.$store.getters["UserModules/User"].PhoneNumber,
            national_code: this.$store.getters["UserModules/User"].NationalCode,
            first_name: this.$store.getters["UserModules/User"].Name,
            last_name: this.$store.getters["UserModules/User"].LastName,
            address: this.$store.getters["UserModules/User"].Address,
            school: this.$store.getters["UserModules/User"].School,
            major_id: this.$store.getters["UserModules/User"].Major,
            grade_id: this.$store.getters["UserModules/User"].Grade,
            gender_id: this.$store.getters["UserModules/User"].Gender,
            shahr_id: this.$store.getters["UserModules/User"].City,
            info: this.$store.getters["UserModules/User"].Age,
          },
          {
            headers: {
              Authorization: "Bearer " + this.$store.state.AccessToken,
            },
          }
        )

        .then(response => {
          this.disabler = false;
          alert('Your request has been submitted!');

          this.$store.commit(
            "UserModules/setPhoneValue",
            response.data.data.mobile
          );
          this.$store.commit(
            "UserModules/setCodeValue",
            response.data.data.national_code
          );
          this.$store.commit(
            "UserModules/setNameValue",
            response.data.data.first_name
          );
          this.$store.commit(
            "UserModules/setLastNameValue",
            response.data.data.last_name
          );
          this.$store.commit(
            "UserModules/setAddressValue",
            response.data.data.address
          );
          this.$store.commit(
            "UserModules/setSchoolValue",
            response.data.data.school
          );
          this.$store.commit(
            "UserModules/setMajorValue",
            response.data.data.major.id
          );
          this.$store.commit(
            "UserModules/setGradeValue",
            response.data.data.grade.id
          );
          this.$store.commit(
            "UserModules/setGenderValue",
            response.data.data.gender.id
          );
          this.$store.commit(
            "UserModules/setCityValue",
            response.data.data.shahr.id
          );
          this.$store.commit(
            "UserModules/setProvinceValue",
            response.data.data.shahr.province.id
          );
          this.$store.commit(
            "UserModules/setAgeValue",
            response.data.data.info
          );
        })
        .catch(err => {
          console.error(err);
        });
    },

    editable() {
      this.disabler = !this.disabler;
    },

    urlForPut() {
      return "https://alaatv.com/api/v2/user/" + this.$store.state.Userid;
    },
  },
  computed: {

    provinceId(){
      return this.$store.getters['UserModules/User'].Province;
    },
    
    FilteredItems(){
      return this.cityItems.filter((ele) => {
        return ele.province.id.match(this.$store.getters['UserModules/User'].Province);
      })
    },



    PhoneValue() {
      return this.$store.getters["UserModules/User"].PhoneNumber;
    },

    first: {
      get() {
        return this.$store.getters["UserModules/User"].Name;
      },
      set(value) {
        this.$store.commit("UserModules/setNameValue", value);
      },
    },
    last: {
      get() {
        return this.$store.getters["UserModules/User"].LastName;
      },
      set(value) {
        this.$store.commit("UserModules/setLastNameValue", value);
      },
    },
    age: {
      get() {
        return this.$store.getters["UserModules/User"].Age;
      },
      set(value) {
        this.$store.commit("UserModules/setAgeValue", value);
      },
    },
    code: {
      get() {
        return this.$store.getters["UserModules/User"].NationalCode;
      },
      set(value) {
        this.$store.commit("UserModules/setCodeValue", value);
      },
    },
    phone: {
      get() {
        return this.$store.getters["UserModules/User"].PhoneNumber;
      },
      set(value) {
        this.$store.commit("UserModules/setPhoneValue", value);
      },
    },
    province: {
      get() {
        return this.$store.getters["UserModules/User"].province;
      },
      set(value) {
        this.$store.commit("UserModules/setprovinceValue", value);
      },
    },
    gender: {
      get() {
        return this.$store.getters["UserModules/User"].Gender;
      },
      set(value) {
        this.$store.commit("UserModules/setGenderValue", value);
      },
    },
    grade: {
      get() {
        return this.$store.getters["UserModules/User"].Grade;
      },
      set(value) {
        this.$store.commit("UserModules/setGradeValue", value);
      },
    },
    major: {
      get() {
        return this.$store.getters["UserModules/User"].Major;
      },
      set(value) {
        this.$store.commit("UserModules/setMajorValue", value);
      },
    },
    cities: {
      get() {
        return this.$store.getters["UserModules/User"].City;
      },
      set(value) {
        this.$store.commit("UserModules/setCityValue", value);
      },
    },
    address: {
      get() {
        return this.$store.getters["UserModules/User"].Address;
      },
      set(value) {
        this.$store.commit("UserModules/setAddressValue", value);
      },
    },
    school: {
      get() {
        return this.$store.getters["UserModules/User"].School;
      },
      set(value) {
        this.$store.commit("UserModules/setSchoolValue", value);
      },
    },
  },
  created(){
    axios.get('https://alaatv.com/api/v2/megaroute/getUserFormData')
    .then(response => {
      this.provinceItems = response.data.data.provinces,
      this.genderItems = response.data.data.genders,
      this.gradeItems = response.data.data.grades,
      this.cityItems = response.data.data.cities,
      this.majorItems = response.data.data.majors
    })
    .catch(err => {
      console.error(err); 
    })
  }
};
</script>