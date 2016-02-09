export default class Path {
    protected _source: string;
    protected pathMap: {
        [key: string]: {
            pathType: PathType;
            param: any;
        };
    };
    protected pathList: {
        pathType: PathType;
        param: any;
    }[];
    constructor();
    addRect(rect: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }, id?: string): Path;
    protected addPath(param: {
        pathType: PathType;
        param: any;
    }, id?: string): void;
    contain(id: string): boolean;
    remove(id: string): void;
    protected createRect(rect: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }): string;
    source: string;
}
export declare enum PathType {
    rect = 0,
    arc = 1,
}
