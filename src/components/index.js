import Vue from 'vue';
import genForm from "./gen-form";
const Components = {
    genForm
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components