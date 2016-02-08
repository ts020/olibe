var Path = (function () {
    function Path() {
        this._source = "";
    }
    Path.prototype.addRect = function (rect) {
        this._source += "M" + rect.left + "," + rect.top +
            " L" + rect.right + "," + rect.top +
            " L" + rect.right + "," + rect.bottom +
            " L" + rect.left + "," + rect.bottom +
            " L" + rect.left + "," + rect.top + " Z ";
        return this;
    };
    Object.defineProperty(Path.prototype, "source", {
        get: function () {
            return this._source;
        },
        enumerable: true,
        configurable: true
    });
    return Path;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Path;
