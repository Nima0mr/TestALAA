"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var state = function state() {
  return {
    User: {
      PhoneNumber: "",
      NationalCode: "",
      Name: "",
      LastName: "",
      Age: "",
      province: "",
      City: "",
      Gender: "",
      Grade: "",
      Major: "",
      School: "",
      Address: ""
    }
  };
};

var getters = {
  User: function User(state) {
    return state.User;
  }
};
var mutations = {
  setPhoneValue: function setPhoneValue(state, newValue) {
    state.User.PhoneNumber = newValue;
  },
  setCodeValue: function setCodeValue(state, newValue) {
    state.User.NationalCode = newValue;
  },
  setNameValue: function setNameValue(state, newValue) {
    state.User.Name = newValue;
  },
  setLastNameValue: function setLastNameValue(state, newValue) {
    state.User.LastName = newValue;
  },
  setAgeValue: function setAgeValue(state, newValue) {
    state.User.Age = newValue;
  },
  setprovinceValue: function setprovinceValue(state, newValue) {
    state.User.province = newValue;
  },
  setCityValue: function setCityValue(state, newValue) {
    state.User.City = newValue;
  },
  setGenderValue: function setGenderValue(state, newValue) {
    state.User.Gender = newValue;
  },
  setGradeValue: function setGradeValue(state, newValue) {
    state.User.Grade = newValue;
  },
  setMajorValue: function setMajorValue(state, newValue) {
    state.User.Major = newValue;
  },
  setSchoolValue: function setSchoolValue(state, newValue) {
    state.User.School = newValue;
  },
  setAddressValue: function setAddressValue(state, newValue) {
    state.User.Address = newValue;
  }
};
var _default = {
  namespaced: true,
  state: state,
  mutations: mutations,
  getters: getters
};
exports["default"] = _default;