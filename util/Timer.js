var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observer_1 = require("../Observer");
var Timer = (function (_super) {
    __extends(Timer, _super);
    function Timer(duration, repeat) {
        if (duration === void 0) { duration = 100; }
        if (repeat === void 0) { repeat = 0; }
        _super.call(this);
        this.duration = duration;
        this.repeat = repeat;
        this.isPlaying = false;
        this.count = 0;
    }
    Timer.prototype.start = function () {
        var _this = this;
        if (!this.isPlaying) {
            this.count = 0;
            this.timerID = setInterval(function () {
                if (_this.repeat > 0 && _this.repeat <= _this.count) {
                    _this.stop();
                    _this.trigger("timerComplete");
                }
                _this.count++;
                _this.trigger("timer");
            }, this.duration);
        }
    };
    Timer.prototype.pause = function () {
        clearInterval(this.timerID);
    };
    Timer.prototype.stop = function () {
        this.pause();
        this.count = 0;
    };
    return Timer;
})(Observer_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Timer;
