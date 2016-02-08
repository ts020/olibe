export default class Path {
    protected _source:string;

    constructor() {
        this._source = "";
    }

    addRect(rect:{left:number; top:number; right:number; bottom:number;}):Path {
        this._source += "M"+rect.left+","+rect.top+
            " L"+rect.right+"," +rect.top +
            " L"+rect.right+","+rect.bottom+
            " L"+rect.left +","+rect.bottom+
            " L"+rect.left+","+rect.top+" Z ";
        return this;
    }

    get source():string {
        return this._source;
    }
}