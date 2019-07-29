import Vue from "vue";
import {addClass, removeClass} from "./helpers";
let mouseOverHandler = function(event){
    let span = event.target.parentNode.getElementsByTagName('span')[0];
    addClass(span,'tooltip-show');
};
let mouseOutHandler = function(event){
    let span = event.target.parentNode.getElementsByTagName('span')[0];
    removeClass(span,'tooltip-show');
};
export default {
    install(Vue){
        Vue.directive('tooltip',{
            bind(el,bindings){
                let span = document.createElement('span');
                let text = document.createTextNode(`Seats available: ${bindings.value.seats}`);
                span.appendChild(text);
                addClass(span,'tooltip');
                el.appendChild(span);
                let div = el.getElementsByTagName('div')[0];
                div.addEventListener('mouseover',mouseOverHandler);
                div.addEventListener('mouseout',mouseOutHandler)
            }
        })
    }
}