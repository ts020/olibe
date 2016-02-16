import Observer from "./../core/Observer";
import Frame from "./../core/Frame"
export default class QueLoader extends Observer {
    private static _instatnce:QueLoader;
    static get instance() {
        if(!QueLoader._instatnce){
            QueLoader._instatnce = new QueLoader();
        }
        return QueLoader._instatnce;
    }


    protected queList: LoadQue[];
    protected queHash: any;
    protected currentQue:LoadQue;
    protected loadedHandler:Function;

    constructor() {
        super();
        this.queList = [];
        this.queHash = {};
        this.currentQue = null;
        this.loadedHandler = this.loaded.bind(this);
    }

    add(url:string, callback:Function) {
        if(this.queHash[url]) {
            return;
        }
        var que = new LoadQue(url, callback);
        que.on("loaded", this.loadedHandler);

        this.queList.push(que);
        this.queHash[url] = que;

        if(!this.currentQue) {
            this.next();
        }
    }

    next() {
        if(this.queList.length == 0) {
            this.trigger("loadComplete");
            return;
        }
        this.trigger("loadStart");
        this.currentQue = this.queList.shift();
        delete this.queHash[this.currentQue.url];
        this.currentQue.load();
    }

    loaded(e:{type:string; data:any}){
        e.data.kill();
        this.next();
    }
}
declare var request:any;
export class LoadQue extends Observer {
    response:any;
    constructor(public url:string, public callBack:Function) {
        super();
    }

    load() {
        request.get(this.url, (err:any, res:any)=>{
            this.response = res;
            if (err) {
                this.trigger("loaded", this);
                console.error(err);
                return;
            }

            if(res.body.length == 0) {
                this.trigger("loaded", this);
                return;
            }
            this.callBack(res);
            this.trigger("loaded", this);
        });
    }

    kill() {
        this.allOff();
        delete this.callBack;
    }
}