export default class Path {
    protected _source: string;
    protected pathMap: {
        [key: string]: IPathParam;
    };
    protected pathList: IPathParam[];
    constructor();
    addRect(rect: IRect, id?: string): Path;
    protected addPath(param: IPathParam, id?: string): void;
    contain(id: string): boolean;
    remove(id: string): void;
    protected createRect(rect: IRect): string;
    source: string;
}
export interface IRect {
    left: number;
    right: number;
    top: number;
    bottom: number;
}
export interface IPathParam {
    pathType: PathType;
    param: any;
}
export declare enum PathType {
    rect = 0,
    arc = 1,
}
