import Point from "./Point";
export default class Rect {
    protected _left: number;
    protected _top: number;
    protected _right: number;
    protected _bottom: number;
    offset: Point;
    constructor(_left: number, _top: number, _right: number, _bottom: number);
    left: number;
    right: number;
    top: number;
    bottom: number;
    width: number;
    height: number;
    center: number;
    middle: number;
    setSize(width: number, height: number): Rect;
    clone(): Rect;
    static domToRelative(dom: HTMLElement): Rect;
    static domToGlobal(dom: HTMLElement): Rect;
    static buildToBoundRect(rect: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }): Rect;
}
