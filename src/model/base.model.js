import axios ,{ CancelToken }from 'axios';
import { resolve } from 'url';
let defaultParas={};

class BaseModel{
    constructor(options={}){
        this.paras = Object.assign({},defaultParas,options);
        this.timeout = 5000;
        this.lastAbort = false;
        this.url = '';
        this.baseURl='https://api.github.com/';
    }
    init(){
        this._source = CancelToken.source();//内部变量
        this._isFetching = false;//内部变量
        this.service = axios.create({
            baseURL: this.baseURl,
            data: this.paras,
            cancelToken: this._source.token,
            timeout: this.timeout,
            headers: {
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            transformRequest: [function(data){
                return data;
            }]
        });
        this.service.interceptors.response.use(function(response){
            let res = response;
            if(res.statusText == "OK" && res.status == 200){
                return res.data;
            }else{
                return Promise.reject(res);
            }
        },function(err){
            return Promise.reject(err);
        })
    }
    fetch(data){
        if(this._isFetching && this.lastAbort){
            this.abort();
        }
        return new Promise((resolve,reject) => {
            this._isFetching = true;
            this.service.get(this.url,Object.assign({},this.paras,data)).then(response => {
                this._isFetching =false;
                let data = this.dataformat(response);
                resolve(data);
            }).catch(error => {
                this._isFetching = false;
                reject(error);
            })
        })
    }
    abort(){
        this._source.cancel();
        this._isFetching = false;
        this.init();
    }
    dataformat(response){
        return response;
    }
}
export default BaseModel;
