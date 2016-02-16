import Observer from "./Observer"
export default class Frame extends Observer {

    private static  __instance__:Frame;

    private static get instance():Frame {
        if(!Frame.__instance__) {
            Frame.__instance__ = new Frame();
        }
        return Frame.__instance__;
    }

    static next( handler:Function):Frame {
        Frame.instance.on("next", handler);
        return Frame.instance;
    }

    static add(frame:number, handler:Function):Frame {
        Frame.instance.add(frame, handler);
        return Frame.instance;
    }

    protected frameHandlers:Function[][];

    constructor() {
        super();
        this.frameHandlers = [];
        this.startEnterFrame();
    }

    startEnterFrame():void{
        var enterFrame = EnterFrameFactory.create();
        enterFrame(()=>{
            this.trigger("next");
            this.off("next");
            if(this.frameHandlers.length > 0) {
                var lazy = this.frameHandlers.shift();
                if(lazy) {
                    lazy.forEach(function(d:Function){
                        d();
                    })
                }
            }
            this.trigger("enter");
        })
    }

    add(frame:number, handler:Function) {
        if(!this.frameHandlers[frame]) {
            this.frameHandlers[frame] = [];
        }
        this.frameHandlers[frame].push(handler);
    }
}


class EnterFrameFactory {
    static create():Function {
        if(window.requestAnimationFrame) {
            return _requestAnimationFrame();
        }
        return _setInterval;
    }
}

function _requestAnimationFrame():Function {
    var d = function(handler:Function){
        window.requestAnimationFrame(function () {
            handler();
            d(handler);
        });
    };
    return d;
}

function _setInterval():Function {
    return function(_handler:Function){
        setInterval(function(){
            _handler(_handler);
        },1000 / 60);
    }
}