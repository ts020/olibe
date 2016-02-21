import Point from "./Point";

export default class Rect {
    offset:Point;
    constructor(protected _left:number, protected _top:number, protected _right:number, protected _bottom:number) {
        this.offset = new Point();
    }

    get left():number {
        return this._left + this.offset.x;
    }

    get right():number {
        return this._right + this.offset.x;
    }

    get top():number {
        return this._top + this.offset.y;
    }

    get bottom():number {
        return this._bottom + this.offset.y;
    }

    get width():number {
        return this._right - this._left + this.offset.x;
    }

    get height():number {
        return this._bottom - this._top + this.offset.y;
    }

    get center():number {
        return (this._left + this._right) /2 + this.offset.x;
    }

    get middle():number {
        return (this._top + this._bottom) / 2 + this.offset.y;
    }

    setSize(width:number, height:number):Rect {
        this._right = this._right + (width - this.width);
        this._bottom = this._bottom + (height - this.height);
        return this;
    }

    hitTest(rect:Rect):boolean {
        var checkX:boolean = false,checkY:boolean = false;

        if((this.left >= rect.left) && ((this.width+rect.width) >= this.left))
            checkX = true;
        else if((rect.left >= this.left) && ((this.right) >= rect.left))
            checkX = true;
        if((this.top >= rect.top) && ((rect.top+rect.height) >= this.top))
            checkY = true;
        else if((rect.top >= this.top) && ((this.bottom) >= rect.top))
            checkY = true;
        return (checkX && checkY);
    }

    clone():Rect {
        return new Rect(this._left, this._top, this._right, this._bottom);
    }

    static domToRelative(dom:HTMLElement):Rect {
        return new Rect(dom.offsetLeft, dom.offsetTop, dom.offsetLeft+dom.offsetWidth, dom.offsetTop+dom.offsetHeight);
    }

    static domToGlobal(dom:HTMLElement):Rect {
        var rect = dom.getBoundingClientRect();
        return new Rect(rect.left, rect.top, rect.right, rect.bottom);
    }

    static vueToGlobal(vueElement:any):Rect {
        return Rect.domToGlobal(vueElement.$el);
    }

    static buildToBoundRect(rect:{left:number; top:number; right:number; bottom:number;}):Rect {
        return new Rect(rect.left, rect.top, rect.right, rect.bottom);
    }
}