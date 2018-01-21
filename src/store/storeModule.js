import { INCREMENT,INJECT } from '@/const'


export let testModuleA = {
    name:'testModuleA',
    namespaced:true,
    state:{
        count:2,
        inject:0
    },
    mutations:{ //mutation必须是同步函数
        [INCREMENT](state,payload){ 
            state.count += payload.count;
        },
        [INJECT](state){
            state.inject++;
        }
    },
    //异步action 和组合异步action
    actions:{
        [INCREMENT]({ commit, state},payload){
            let asyncFun = () =>{
                return new Promise((resolve,reject) =>{
                    setTimeout(()=>{
                        resolve('haha');
                    },3000)
                });
            }
            asyncFun().then(data =>{
                console.log(data);
                commit(INCREMENT,{count:payload.count});
            })
        }
    }
}

export let testModuleB = {
    name:'testModuleB',
    namespaced:true,
    state:{
        count:2,
        inject:0
    },
    mutations:{ //mutation必须是同步函数
        [INCREMENT](state,payload){ 
            state.count += payload.count;
        },
        [INJECT](state){
            state.inject++;
        }
    },
    //异步action 和组合异步action
    actions:{
        [INCREMENT]({ commit, state},payload){
            let asyncFun = () =>{
                return new Promise((resolve,reject) =>{
                    setTimeout(()=>{
                        resolve('haha');
                    },3000)
                });
            }
            asyncFun().then(data =>{
                console.log(data);
                commit(INCREMENT,{count:payload.count});
            })
        }
    }
}

export let reuseModule= {
    state(){
        return {
            count:0
        }
    }
}