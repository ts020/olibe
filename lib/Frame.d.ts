import Observer from "./Observer";
export default class Frame extends Observer {
    private static __instance__;
    private static instance;
    static next(handler: Function): Frame;
    static add(frame: number, handler: Function): Frame;
    protected frameHandlers: Function[][];
    constructor();
    startEnterFrame(): void;
    add(frame: number, handler: Function): void;
}
