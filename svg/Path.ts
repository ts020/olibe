import ArrayUtil from "../util/ArrayUtil"
export default class Path {
    protected _source:string;
    protected pathMap:{[key:string]:{pathType:PathType;param:any;}};
    protected pathList:{pathType:PathType;param:any;}[];
    constructor() {
        this._source = "";
        this.pathMap = {};
        this.pathList = [];
    }

    addRect(rect:{left:number; top:number; right:number; bottom:number;}, id:string=null):Path {
        this.addPath({param:rect, pathType:PathType.rect}, id);
        return this;
    }

    protected addPath(param:{pathType:PathType;param:any;}, id:string=null):void {
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

    protected createRect(rect:{left:number; top:number; right:number; bottom:number}) {
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

export enum PathType {
    rect,
    arc
}