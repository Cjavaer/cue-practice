import BaseModel from './base.model'

class CNodeModel extends BaseModel{
    constructor(options = {}){
        super(options);
    }
}

export class getTopics extends CNodeModel{
    constructor(){
        super();
        this.baseURl = ' https://cnodejs.org/api/v1';
        this.url ='/topics';
        this.init();
    }
}
export class getTopic extends CNodeModel{
    constructor(){
        super();
        this.baseURl = ' https://cnodejs.org/api/v1';
        this.url ='/topic';
        this.init();
    }
}