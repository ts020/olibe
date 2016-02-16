export default class CalendarData {
    year: number;
    month: number;
    constructor(year?: number, month?: number);
    getWeeks(): Date[][];
}
