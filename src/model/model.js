import BaseModel from './base.model';

class BizModel extends BaseModel{
    constructor(options={}){
    //这里可以做一些定制化的参数传入
        super(options);
    }
}

export class GitHubUserModel extends BizModel{
    constructor(){
        super();
        this.lastAbort = true;
        this.url='users/'
        this.init();
    }
}

