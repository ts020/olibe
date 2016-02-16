import Observer from "./../core/Observer";
export default class QueLoader extends Observer {
    private static _instatnce;
    static instance: QueLoader;
    protected queList: LoadQue[];
    protected queHash: any;
    protected currentQue: LoadQue;
    protected loadedHandler: Function;
    constructor();
    add(url: string, callback: Function): void;
    next(): void;
    loaded(e: {
        type: string;
        data: any;
    }): void;
}
export declare class LoadQue extends Observer {
    url: string;
    callBack: Function;
    response: any;
    constructor(url: string, callBack: Function);
    load(): void;
    kill(): void;
}
