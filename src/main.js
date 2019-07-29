import Vue from 'vue';

import './style.scss';

import VueResource from 'vue-resource';
Vue.use(VueResource);
import moment from 'moment-timezone';
moment.tz.setDefault("UTC");

Object.defineProperty(Vue.prototype,'$moment',{get() {
    return this.$root.moment;
    }});

const bus = new Vue();
Object.defineProperty(Vue.prototype,'$bus',{get() {
    return this.$root.bus;
    }});

import tooltip from "./util/tooltip";

Vue.use(tooltip);

import { checkFilter,setDay } from './util/bus';
import routes from './util/routes';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
    routes,
});

new Vue({
    el:'#app',
    router,
    data:{
      genre:[],
      time:[],
        movies:[],
        moment,
        day: moment(),
        bus
    },
     created() {
        this.$http.get('/api')
            .then(res => {
                this.movies=res.data;
            });
         this.$bus.$on('check-filter',checkFilter.bind(this))
         this.$bus.$on('set-day',setDay.bind(this));
    }
});



