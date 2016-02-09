import ArrayUtil from "../util/ArrayUtil"
export default class Path {
    protected _source:string;
    protected pathMap:{[key:string]:IPathParam};
    protected pathList:IPathParam[];
    constructor() {
        this._source = "";
        this.pathMap = {};
        this.pathList = [];
    }

    addRect(rect:IRect, id:string=null):Path {
        this.addPath({param:rect, pathType:PathType.rect}, id);
        return this;
    }

    protected addPath(param:IPathParam, id:string=null):void {
        if(this.contain(id)) {
            return;
        }

        if(!id) {
            id = Math.random().toString();
        }

        this.pathList.push(param);
        this.pathMap[id] = param;
    }

    public contain(id:string) {
        return this.pathMap[id] != null;
    }

    public remove(id:string) {
        ArrayUtil.without(this.pathList, this.pathMap[id]);
        delete this.pathMap[id];
    }

    protected createRect(rect:IRect) {
        return "M"+rect.left+","+rect.top+
            " L"+rect.right+"," +rect.top +
            " L"+rect.right+","+rect.bottom+
            " L"+rect.left +","+rect.bottom+
            " L"+rect.left+","+rect.top+" Z ";
    }

    get source():string {
        var result = "";
        this.pathList.forEach((d:{pathType:PathType;param:any;})=>{
            if(d.pathType == PathType.rect) {
                result += this.createRect(d.param);
            }else if(d.pathType == PathType.arc) {

            }
        });

        return result;
    }
}

export interface IRect {
    left:number;
    right:number;
    top:number;
    bottom:number;
}

export interface IPathParam {
    pathType:PathType;
    param:any;
}

export enum PathType {
    rect,
    arc
}