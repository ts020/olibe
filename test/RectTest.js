var should = require('should');
var Rect = require('../geom/Rect').default;

describe('RectTest', function () {
    it("hitTest inner", function(){
        var rect = new Rect(10, 10, 110, 110);
        rect.hitTest(new Rect(20,-20,30,30)).should.equal(true);
    });


    it("hitTest left top", function(){
        var rect = new Rect(10, 10, 110, 110);
        rect.hitTest(new Rect(-20,-20,30,30)).should.equal(true);
    });

    it("hitTest right top", function(){
        var rect = new Rect(0, 0, 100, 100);
        var target = new Rect(90,-10,110,10);
        rect.hitTest(target).should.equal(true);
    });

    it("hitTest left bottom", function(){
        var rect = new Rect(0, 0, 100, 100);
        var target = new Rect(-10,90,20,110);
        rect.hitTest(target).should.equal(true);
    });

    it("hitTest right bottom", function(){
        var rect = new Rect(0, 0, 100, 100);
        var target = new Rect(90,90,110,110);
        rect.hitTest(target).should.equal(true);
    });

    it("hitTest no hit", function(){
        var rect = new Rect(0, 0, 100, 100);
        var target = new Rect(101,101,110,110);
        rect.hitTest(target).should.equal(false);
        var target2 = new Rect(-10,-10, -1, -1);
        rect.hitTest(target2).should.equal(false);
    });
});