import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './storeItems/StoreGetters'
import * as mutations from './storeItems/StoreMutations'
import * as actions from './storeItems/StoreActions'
import UserModules from './modules/UserModule'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        Userid:'',
        AccessToken:''
    },
    getters,
    mutations,
    actions,
    modules:{
        UserModules,
        FormData
    }
});