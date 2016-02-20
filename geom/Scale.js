var LinearScale = (function () {
    function LinearScale() {
    }
    LinearScale.prototype.domain = function (min, max) {
        this._domain = { min: min, max: max };
        return this;
    };
    LinearScale.prototype.range = function (min, max) {
        this._range = { min: min, max: max };
        return this;
    };
    LinearScale.prototype.math = function (val) {
        var domainLen = this._domain.max - this._domain.min;
        var valLen = val - this._domain.min;
        var rangeLen = this._range.max - this._range.min;
        return valLen / domainLen * rangeLen + this._range.min;
    };
    return LinearScale;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LinearScale;
