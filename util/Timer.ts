import Observer from "../core/Observer"
export default class Timer extends Observer {
    private timerID:number;
    private isPlaying:boolean = false;
    private count:number = 0;

    constructor(public duration:number = 100, public repeat:number = 0) {
        super();
    }

    start():void {
        if (!this.isPlaying) {
            this.count = 0;
            this.timerID = setInterval(()=> {
                this.count++;
                if (this.repeat <= this.count) {
                    this.stop();
                    this.trigger("timerComplete");
                }
                this.trigger("timer");
            }, this.duration)
        }
    }

    pause():void {
        clearInterval(this.timerID);
    }

    stop():void {
        this.pause();
        this.count = 0;
    }
}