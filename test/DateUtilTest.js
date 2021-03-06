var should = require('should');
var DateUtil = require('../util/DateUtil').default;

describe('DateUtilTest', function () {

    it("equalDate 同じ日、違う時間", function(){
        DateUtil.equalDate(new Date("2016/2/16 00:00:00"), new Date("2016/2/16 18:06:18"))
        .should.equal(true);
    });

    it("equalDate 同じ日、同じ時間", function(){
        DateUtil.equalDate(new Date(2016,2,15), new Date(2016,2,15, 0,0))
            .should.equal(true);
    });

    it("equalDate bがaの1日後", function(){
        DateUtil.equalDate(new Date(2016,2,16), new Date(2016,2,17))
            .should.equal(false);
    });

    it("equalDate bがaの半日前", function(){
        DateUtil.equalDate(new Date(2016,2,16,14,0), new Date(2016,2,17,2,0))
            .should.equal(false);
    });
});