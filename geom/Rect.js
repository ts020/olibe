var Point_1 = require("./Point");
var Rect = (function () {
    function Rect(_left, _top, _right, _bottom) {
        this._left = _left;
        this._top = _top;
        this._right = _right;
        this._bottom = _bottom;
        this.offset = new Point_1.default();
    }
    Object.defineProperty(Rect.prototype, "left", {
        get: function () {
            return this._left + this.offset.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "right", {
        get: function () {
            return this._right + this.offset.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "top", {
        get: function () {
            return this._top + this.offset.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "bottom", {
        get: function () {
            return this._bottom + this.offset.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "width", {
        get: function () {
            return this._right - this._left + this.offset.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "height", {
        get: function () {
            return this._bottom - this._top + this.offset.y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "center", {
        get: function () {
            return (this._left + this._right) / 2 + this.offset.x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "middle", {
        get: function () {
            return (this._top + this._bottom) / 2 + this.offset.y;
        },
        enumerable: true,
        configurable: true
    });
    Rect.prototype.setSize = function (width, height) {
        this._right = this._right + (width - this.width);
        this._bottom = this._bottom + (height - this.height);
        return this;
    };
    Rect.prototype.hitTest = function (rect) {
        var checkX = false, checkY = false;
        if ((this.left >= rect.left) && ((this.width + rect.width) >= this.left))
            checkX = true;
        else if ((rect.left >= this.left) && ((this.right) >= rect.left))
            checkX = true;
        if ((this.top >= rect.top) && ((rect.top + rect.height) >= this.top))
            checkY = true;
        else if ((rect.top >= this.top) && ((this.bottom) >= rect.top))
            checkY = true;
        return (checkX && checkY);
    };
    Rect.prototype.clone = function () {
        return new Rect(this._left, this._top, this._right, this._bottom);
    };
    Rect.domToRelative = function (dom) {
        return new Rect(dom.offsetLeft, dom.offsetTop, dom.offsetLeft + dom.offsetWidth, dom.offsetTop + dom.offsetHeight);
    };
    Rect.domToGlobal = function (dom) {
        var rect = dom.getBoundingClientRect();
        return new Rect(rect.left, rect.top, rect.right, rect.bottom);
    };
    Rect.vueToGlobal = function (vueElement) {
        return Rect.domToGlobal(vueElement.$el);
    };
    Rect.buildToBoundRect = function (rect) {
        return new Rect(rect.left, rect.top, rect.right, rect.bottom);
    };
    return Rect;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Rect;
