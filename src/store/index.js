import Vue from 'vue'
import Vuex from 'vuex'
import searchSet from './searchSet';
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        searchSet
    }
})
