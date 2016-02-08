export default class Path {
    protected _source: string;
    constructor();
    addRect(rect: {
        left: number;
        top: number;
        right: number;
        bottom: number;
    }): Path;
    source: string;
}
