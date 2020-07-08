import Vue from 'vue';
import genForm from "./gen-search";
import genSearchSet from "./gen-search-set";
import "./style/common.scss";
const Components = {
    genForm,
    genSearchSet
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components