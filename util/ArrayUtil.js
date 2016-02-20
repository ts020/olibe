/**
 * Created by sugawaratakanori on 2016/02/08.
 */
/**
 * Created by ts on 2016/01/25.
 */
var ArrayUtil = (function () {
    function ArrayUtil() {
    }
    ArrayUtil.without = function (array, item) {
        if (item == null || array == null || array.indexOf(item) == -1) {
            return;
        }
        array.splice(array.indexOf(item), 1);
    };
    ArrayUtil.flatten = function (array, key) {
        if (key === void 0) { key = null; }
        var result = [];
        if (key) {
            array.forEach(function (d) {
                result.concat(d[key]);
            });
        }
        else {
            array.forEach(function (d) {
                result.concat(d);
            });
        }
        return result;
    };
    return ArrayUtil;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ArrayUtil;
