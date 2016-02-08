export default class Observer {

    private listeners:any;

    constructor() {
        this.listeners = {};
    }

    protected getListener(type:string):Function[] {
        if(!this.listeners[type])this.listeners[type] = []
        return this.listeners[type];
    }

    protected contain(type:string, handler:Function):boolean {
        return this.getListener(type).indexOf(handler) != -1;
    }

    on(type:string, handler:Function):void {
        this.getListener(type).push(handler);
    }

    off(type:string, handler:Function = null):void {
        if (!handler) {
            this.listeners[type] = [];
            return;
        }

        if (!this.contain(type, handler)) {
            return;
        }

        var list = this.getListener(type);
        for (var i = 0; i < list.length; i++) {
            if (list[i] == handler) {
                list.splice(i, 1);
                return;
            }
        }
    }

    allOff():void {
        this.listeners = {};
    }

    trigger(type:string, data:any = null):void {
        var sender = {type: type, data: data};
        this.getListener(type).forEach(function (hanlder) {
            try {
                hanlder(sender);
            } catch (error) {
                if (window["console"]) {
                    console.error(error.stack);
                }
            }
        });
    }

}