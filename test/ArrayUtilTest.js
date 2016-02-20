var should = require('should');
var ArrayUtil = require('../util/ArrayUtil').default;

describe('ArrayUtilTest', function () {
    it("flatten", function(){
        var arr = [[1,2,3,4],[5,6,7],[8,9],[10]];
        var result = ArrayUtil.flatten(arr);
        result.forEach(function(d, index){
            d.should.equal(index+1);
        });
    });

    it("flatten property", function(){
        var arr = [{list:[1,2,3,4]},{list:[5,6,7]},{list:[8,9]},{list:[10]}];
        var result = ArrayUtil.flatten(arr, "list");
        result.forEach(function(d, index){
            d.should.equal(index+1);
        });
    });
});