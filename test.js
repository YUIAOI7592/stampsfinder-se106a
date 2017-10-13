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
            assert.deepEqual(typeof(S.initIA([], 1)), 'undefined');
        });
    });
});
