import ArrayUtil from "../util/ArrayUtil.ts"
export default class CalendarData {
    constructor(public year:number=null, public month:number=null) {
        var date = new Date();
        this.year = this.year || date.getFullYear();
        this.month = this.month-1 || date.getMonth()+1;
    }

    getWeeks():Date[][] {
        var result = <Date[][]>[];
        var lastDate = new Date(this.year, this.month+1, 0).getDate();
        var week:any[] = [null, null, null, null, null, null, null];
        result.push(week);
        for(var i=1; i  <= lastDate; i++) {
            var d = new Date(this.year, this.month, i);
            var day = d.getDay();
            week[d.getDay()] = d;
            if(day == 6) {
                week = [null, null, null, null, null, null, null];
                result.push(week);
            }
        }
        return result;
    }
}