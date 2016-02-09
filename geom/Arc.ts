import Arc from "./";
export default class Arc {
    //rx ry x-axis-rotation large-arc-flag sweep-flag x y

    constructor(public rx:number=0,
                public ry:number=0,
                public endX:number=0,
                public endY:number=0,
                public rotation:number=0,
                public pattern:ArcPattern = ArcPattern.inBottom ) {}

    toSVGArc() {
        var flg = this.getFlag[this.pattern];
        return {
            rx: this.rx,
            ry: this.ry,
            rotation : this.rotation,
            largeArcFlag : flg.large,
            sweepFlag : flg.sweep,
            x : this.endX,
            y : this.endY
        }
    }


    protected getFlag():{large:number; sweep:number} {
        return Arc.patterns[this.pattern];
    }

    static patterns = {
        inBottom : {large:0, sweep:0},
        inTop : {large:0, sweep:1},
        outBottom : {large:1, sweep:0},
        outTop : {large:1, sweep:1}
    }
}


export enum ArcPattern {
    inBottom = "inBottom",
    inTop = "inTop",
    outBottom = "outBottom",
    outTop = "outTop"
}