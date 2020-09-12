import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import paginate from './modules/paginate'
import app from './modules/app'

Vue.use(Vuex)


export  default  new  Vuex.Store({
    modules: {
        user,
        paginate,
        app,
    },
})