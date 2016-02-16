var CalendarData = (function () {
    function CalendarData(year, month) {
        if (year === void 0) { year = null; }
        if (month === void 0) { month = null; }
        this.year = year;
        this.month = month;
        var date = new Date();
        this.year = this.year || date.getFullYear();
        this.month = this.month || date.getMonth() + 1;
    }
    CalendarData.prototype.getWeeks = function () {
        var result = [];
        var lastDate = new Date(this.year, this.month + 1, 0).getDate();
        var week = [null, null, null, null, null, null, null];
        for (var i = 1; i < lastDate; i++) {
            var d = new Date(this.year, this.month, i);
            var day = d.getDay();
            week[d.getDay()] = d;
            if (day == 0 || result.length == 0) {
                result.push(week);
                week = [null, null, null, null, null, null, null];
            }
        }
        return result;
    };
    return CalendarData;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CalendarData;
