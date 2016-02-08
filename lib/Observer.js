var Observer = (function () {
    function Observer() {
        this.listeners = {};
    }
    Observer.prototype.getListener = function (type) {
        if (!this.listeners[type])
            this.listeners[type] = [];
        return this.listeners[type];
    };
    Observer.prototype.contain = function (type, handler) {
        return this.getListener(type).indexOf(handler) != -1;
    };
    Observer.prototype.on = function (type, handler) {
        this.getListener(type).push(handler);
    };
    Observer.prototype.off = function (type, handler) {
        if (handler === void 0) { handler = null; }
        if (!handler) {
            this.listeners[type] = [];
            return;
        }
        if (!this.contain(type, handler)) {
            return;
        }
        var list = this.getListener(type);
        for (var i = 0; i < list.length; i++) {
            if (list[i] == handler) {
                list.splice(i, 1);
                return;
            }
        }
    };
    Observer.prototype.allOff = function () {
        this.listeners = {};
    };
    Observer.prototype.trigger = function (type, data) {
        if (data === void 0) { data = null; }
        var sender = { type: type, data: data };
        this.getListener(type).forEach(function (hanlder) {
            try {
                hanlder(sender);
            }
            catch (error) {
                if (window["console"]) {
                    console.error(error.stack);
                }
            }
        });
    };
    return Observer;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Observer;
