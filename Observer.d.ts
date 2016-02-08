export default class Observer {
    private listeners;
    constructor();
    protected getListener(type: string): Function[];
    protected contain(type: string, handler: Function): boolean;
    on(type: string, handler: Function): void;
    off(type: string, handler?: Function): void;
    allOff(): void;
    trigger(type: string, data?: any): void;
}
