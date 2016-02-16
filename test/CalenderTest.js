var should = require('should');
var CalendarData = require('../data/CalendarData').default;

describe('CalendarDataTest', function () {

    it("2016/2 1w 日", function(){
        var calendar = new CalendarData(2016,2);
        var weeks = calendar.getWeeks();
        should.not.exist(weeks[0][0]);
    });

    it("2016/2 1w 月", function(){
        var calendar = new CalendarData(2016,2);
        var weeks = calendar.getWeeks();
        weeks[0][1].getDate().should.equal(1);
        weeks[0][1].getDay().should.equal(1);
    });
    it("2016/2 2w 月", function(){
        var calendar = new CalendarData(2016,2);
        var weeks = calendar.getWeeks();
        weeks[1][1].getDate().should.equal(8);
        weeks[1][1].getDay().should.equal(1);
    });

    it("2016/2 5w 月", function(){
        var calendar = new CalendarData(2016,2);
        var weeks = calendar.getWeeks();
        weeks[4][1].getDate().should.equal(29);
        weeks[4][1].getDay().should.equal(1);
    });

    it("2016/3 1w 火", function(){
        var calendar = new CalendarData(2016,3);
        var weeks = calendar.getWeeks();
        weeks[0][2].getDate().should.equal(1);
        weeks[0][2].getDay().should.equal(2);
    });

    it("2016/3/31 木", function(){
        var calendar = new CalendarData(2016,3);
        var weeks = calendar.getWeeks();
        weeks[4][4].getDate().should.equal(31);
        weeks[4][4].getDay().should.equal(4);
    });

});