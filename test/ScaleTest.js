var should = require('should');
var Scale = require('../geom/Scale').default;

describe('Scale', function () {
    it("int", function(){
        var scale = new Scale();
        scale.domain(0,20).range(10,30).math(20).should.equal(30);
    });

    it("float", function(){
        var scale = new Scale();
        scale.domain(0,2.5).range(10,30).math(20).should.equal(170);
    });

    it("20:00", function(){
        var scale = new Scale();
        scale.domain(0,1).range(0,50).math(20).should.equal(1000);
    });
});