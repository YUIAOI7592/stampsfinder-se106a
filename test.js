var assert = require('assert');
var S = require('./stamp.js')
describe('S.sumUpStamps', function () {
    describe('[1, 2, 3, 5, 10], [0, 0, 1, 2, 4]', function () {
        it('should be 17', function () {
            assert.equal(17, S.sumUpStamps([1, 2, 3, 5, 10], [0, 0, 1, 2, 4]));
        });
    });
    describe('[1, 2, 5, 10, 20], [0, 1, 1, 3, 3]', function () {
        it('should be 25', function () {
            assert.equal(25, S.sumUpStamps([1, 2, 5, 10, 20], [0, 1, 1, 3, 3]));
        });
    });
    describe('[2, 10], [0, 1]', function () {
        it('should be 12', function () {
            assert.equal(12, S.sumUpStamps([2, 10], [0, 1]));
        });
    });
    describe('[1], [0, 0]', function () {
        it('should be undefined', function () {
            assert.equal(2, S.sumUpStamps([1], [0, 0]));
        });
    });
});

describe('S.initIA', function () {
    describe('[1, 2, 3, 5], 23', function () {
        it('should be [3, 3, 3, 3, 3]', function () {
            a = [3, 3, 3, 3, 3];
            assert.deepEqual(S.initIA([1, 2, 3, 5], 23), a);
        });
    });
    describe('[2, 10], 15', function () {
        it('should be [1, 1]', function () {
            assert.deepEqual(S.initIA([2, 10], 15), [1, 1]);
        });
    });
    describe('[], 1', function () {
        it('should be undefined', function () {
            assert.deepEqual(typeof (S.initIA([], 1)), 'undefined');
        });
    });
});
describe('S.nextIAstepDown', function () {
    it('should be [4, 4, 4, 4, 3]', function () {
        assert.deepEqual(S.nextIAstepDown([1, 3, 5, 6, 7], [4, 4, 4, 4, 4], 29), [4, 4, 4, 4, 3]);
    });
    it('should be [4, 4, 4, 4, 2]', function () {
        assert.deepEqual(S.nextIAstepDown([1, 3, 5, 6, 7], [4, 4, 4, 4, 3], 29), [4, 4, 4, 4, 2]);
    });
    it('should be [4, 4, 4, 4, 1]', function () {
        assert.deepEqual(S.nextIAstepDown([1, 3, 5, 6, 7], [4, 4, 4, 4, 2], 29), [4, 4, 4, 4, 1]);
    });
    it('should be [4, 4, 4, 4, 0]', function () {
        assert.deepEqual(S.nextIAstepDown([1, 3, 5, 6, 7], [4, 4, 4, 4, 1], 29), [4, 4, 4, 4, 0]);
    });
    it('should be [4, 4, 4, 4, 0]索引值低於零情形的 迴圈中斷測試', function () {
        assert.deepEqual(S.nextIAstepDown([1, 3, 5, 6, 7], [4, 4, 4, 4, 0], 29), [4, 4, 4, 4, 0]);
    });
    it('should be [3]', function () {
        assert.deepEqual(S.nextIAstepDown([3, 4, 5, 6, 7], [4], 2), [3]);
    });
    it('should be [2]', function () {
        assert.deepEqual(S.nextIAstepDown([3, 4, 5, 6, 7], [3], 2), [2]);
    });
    it('should be [1]', function () {
        assert.deepEqual(S.nextIAstepDown([3, 4, 5, 6, 7], [2], 2), [1]);
    });
    it('should be [0]', function () {
        assert.deepEqual(S.nextIAstepDown([3, 4, 5, 6, 7], [1], 2), [0]);
    });
    it('should be [0]索引值低於零情形的 迴圈中斷測試', function () {
        assert.deepEqual(S.nextIAstepDown([3, 4, 5, 6, 7], [0], 2), [0]);
    });
});
describe('S.findStamp', function () {
    it('should be [7, 7, 7, 7, 1]', function (){
        assert.deepEqual(S.findStamp([1, 3, 5, 6, 7], 29), [7, 7, 7, 7, 1]);
    });
    it('should be [7, 7, 7, 7, 1]永遠大於的情形(無相等解) 迴圈中斷測試', function (){
        assert.deepEqual(S.findStamp([2, 3, 5, 6, 7], 29), [7, 7, 7, 7, 2]);
    });
});

