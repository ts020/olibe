/**
 * Created by sugawaratakanori on 2016/02/08.
 */
var VisitManager = (function () {
    function VisitManager() {
    }
    VisitManager.isVisit = function () {
        return this.getVisitAll()[location.pathname] == true;
    };
    VisitManager.getVisitAll = function () {
        var str = window.localStorage.getItem("vui_visit");
        if (str) {
            return JSON.parse(str);
        }
        return {};
    };
    VisitManager.visit = function () {
        var item = VisitManager.getVisitAll();
        item[location.pathname] = true;
        window.localStorage.setItem("vui_visit", JSON.stringify(item));
    };
    VisitManager.prototype.clear = function () {
        window.localStorage.removeItem("vui_visit");
    };
    return VisitManager;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VisitManager;
