var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Observer_1 = require("./Observer");
var QueLoader = (function (_super) {
    __extends(QueLoader, _super);
    function QueLoader() {
        _super.call(this);
        this.queList = [];
        this.queHash = {};
        this.currentQue = null;
        this.loadedHandler = this.loaded.bind(this);
    }
    Object.defineProperty(QueLoader, "instance", {
        get: function () {
            if (!QueLoader._instatnce) {
                QueLoader._instatnce = new QueLoader();
            }
            return QueLoader._instatnce;
        },
        enumerable: true,
        configurable: true
    });
    QueLoader.prototype.add = function (url, callback) {
        if (this.queHash[url]) {
            return;
        }
        var que = new LoadQue(url, callback);
        que.on("loaded", this.loadedHandler);
        this.queList.push(que);
        this.queHash[url] = que;
        if (!this.currentQue) {
            this.next();
        }
    };
    QueLoader.prototype.next = function () {
        if (this.queList.length == 0) {
            this.trigger("loadComplete");
            return;
        }
        this.trigger("loadStart");
        this.currentQue = this.queList.shift();
        delete this.queHash[this.currentQue.url];
        this.currentQue.load();
    };
    QueLoader.prototype.loaded = function (e) {
        e.data.kill();
        this.next();
    };
    return QueLoader;
})(Observer_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QueLoader;
var LoadQue = (function (_super) {
    __extends(LoadQue, _super);
    function LoadQue(url, callBack) {
        _super.call(this);
        this.url = url;
        this.callBack = callBack;
    }
    LoadQue.prototype.load = function () {
        var _this = this;
        request.get(this.url, function (err, res) {
            _this.response = res;
            if (err) {
                _this.trigger("loaded", _this);
                console.error(err);
                return;
            }
            if (res.body.length == 0) {
                _this.trigger("loaded", _this);
                return;
            }
            _this.callBack(res);
            _this.trigger("loaded", _this);
        });
    };
    LoadQue.prototype.kill = function () {
        this.allOff();
        delete this.callBack;
    };
    return LoadQue;
})(Observer_1.default);
exports.LoadQue = LoadQue;
