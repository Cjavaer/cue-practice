import Vue from 'vue'
import Vuex from 'vuex'
import { testModuleA ,testModuleB ,reuseModule} from './storeModule'
Vue.use(Vuex)

let store;
export default store = new Vuex.Store({
    modules:{
        [testModuleA.name]:testModuleA,
        [testModuleB.name]:testModuleB,
        'reuse':reuseModule
    }
})