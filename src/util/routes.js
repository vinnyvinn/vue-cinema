import Overview from "../components/Overview";
import Detail from "../components/Detail";

export default [
    {path:'/',name:'home',component:Overview},
    {path:'/movie/:id',name:'movie',component:Detail},
    {path:'*',redirect:'/'},
]