/**
 * Created by sugawaratakanori on 2016/02/16.
 */
var week = ["日", "月", "火", "水", "木", "金", "土"];
var DateUtil = (function () {
    function DateUtil() {
    }
    DateUtil.toDayString = function (dayNumber, lang) {
        if (lang === void 0) { lang = "ja"; }
        return week[dayNumber];
    };
    return DateUtil;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DateUtil;
