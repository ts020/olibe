var StringUtil = (function () {
    function StringUtil() {
    }
    StringUtil.htmlEscape = function (str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    };
    StringUtil.htmlUnescape = function (value) {
        return String(value)
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&');
    };
    StringUtil.addZero = function (num) {
        if (num < 10) {
            return "0" + num;
        }
        return num.toString();
    };
    return StringUtil;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StringUtil;
