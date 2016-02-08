var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observer_1 = require("./Observer");
var Frame = (function (_super) {
    __extends(Frame, _super);
    function Frame() {
        _super.call(this);
        this.frameHandlers = [];
        this.startEnterFrame();
    }
    Object.defineProperty(Frame, "instance", {
        get: function () {
            if (!Frame.__instance__) {
                Frame.__instance__ = new Frame();
            }
            return Frame.__instance__;
        },
        enumerable: true,
        configurable: true
    });
    Frame.next = function (handler) {
        Frame.instance.on("next", handler);
        return Frame.instance;
    };
    Frame.add = function (frame, handler) {
        Frame.instance.add(frame, handler);
        return Frame.instance;
    };
    Frame.prototype.startEnterFrame = function () {
        var _this = this;
        var enterFrame = EnterFrameFactory.create();
        enterFrame(function () {
            _this.trigger("next");
            _this.off("next");
            if (_this.frameHandlers.length > 0) {
                var lazy = _this.frameHandlers.shift();
                if (lazy) {
                    lazy.forEach(function (d) {
                        d();
                    });
                }
            }
            _this.trigger("enter");
        });
    };
    Frame.prototype.add = function (frame, handler) {
        if (!this.frameHandlers[frame]) {
            this.frameHandlers[frame] = [];
        }
        this.frameHandlers[frame].push(handler);
    };
    return Frame;
})(Observer_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Frame;
var EnterFrameFactory = (function () {
    function EnterFrameFactory() {
    }
    EnterFrameFactory.create = function () {
        if (window.requestAnimationFrame) {
            return _requestAnimationFrame();
        }
        return _setInterval;
    };
    return EnterFrameFactory;
})();
function _requestAnimationFrame() {
    var d = function (handler) {
        window.requestAnimationFrame(function () {
            handler();
            d(handler);
        });
    };
    return d;
}
function _setInterval() {
    return function (_handler) {
        setInterval(function () {
            _handler(_handler);
        }, 1000 / 60);
    };
}
