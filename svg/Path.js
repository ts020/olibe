var ArrayUtil_1 = require("../util/ArrayUtil");
var Path = (function () {
    function Path() {
        this._source = "";
        this.pathMap = {};
        this.pathList = [];
    }
    Path.prototype.addRect = function (rect, id) {
        if (id === void 0) { id = null; }
        this.addPath({ param: rect, pathType: PathType.rect }, id);
        return this;
    };
    Path.prototype.addPath = function (param, id) {
        if (id === void 0) { id = null; }
        if (this.contain(id)) {
            return;
        }
        if (!id) {
            id = Math.random().toString();
        }
        this.pathList.push(param);
        this.pathMap[id] = param;
    };
    Path.prototype.contain = function (id) {
        return this.pathMap[id] != null;
    };
    Path.prototype.remove = function (id) {
        ArrayUtil_1.default.without(this.pathList, this.pathMap[id]);
        delete this.pathMap[id];
    };
    Path.prototype.createRect = function (rect) {
        return "M" + rect.left + "," + rect.top +
            " L" + rect.right + "," + rect.top +
            " L" + rect.right + "," + rect.bottom +
            " L" + rect.left + "," + rect.bottom +
            " L" + rect.left + "," + rect.top + " Z ";
    };
    Object.defineProperty(Path.prototype, "source", {
        get: function () {
            var _this = this;
            var result = "";
            this.pathList.forEach(function (d) {
                if (d.pathType == PathType.rect) {
                    result += _this.createRect(d.param);
                }
                else if (d.pathType == PathType.arc) {
                }
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    return Path;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Path;
(function (PathType) {
    PathType[PathType["rect"] = 0] = "rect";
    PathType[PathType["arc"] = 1] = "arc";
})(exports.PathType || (exports.PathType = {}));
var PathType = exports.PathType;
