const state = () => ({
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
})
const getters = {
    User (state) {
        return state.User
    },
}
const mutations = {
    setPhoneValue(state, newValue) {
        state.User.PhoneNumber = newValue
    },
    setCodeValue(state, newValue) {
        state.User.NationalCode = newValue
    },
    setNameValue(state, newValue) {
        state.User.Name = newValue
    },
    setLastNameValue(state, newValue) {
        state.User.LastName = newValue
    },
    setAgeValue(state, newValue) {
        state.User.Age = newValue
    },
    setprovinceValue(state, newValue) {
        state.User.province = newValue
    },
    setCityValue(state, newValue) {
        state.User.City = newValue
    },
    setGenderValue(state, newValue) {
        state.User.Gender = newValue
    },
    setGradeValue(state, newValue) {
        state.User.Grade = newValue
    },
    setMajorValue(state, newValue) {
        state.User.Major = newValue
    },
    setSchoolValue(state, newValue) {
        state.User.School = newValue
    },
    setAddressValue(state, newValue) {
        state.User.Address = newValue
    }
}

const actions = {

}


export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}
