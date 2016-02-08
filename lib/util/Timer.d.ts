import Observer from "../Observer";
export declare class Timer extends Observer {
    duration: number;
    repeat: number;
    private timerID;
    private isPlaying;
    private count;
    constructor(duration?: number, repeat?: number);
    start(): void;
    pause(): void;
    stop(): void;
}
