var helperUtils = require('../utils/helperUtils');

describe('exercise1', function () {
  'use strict';

  var TimeUtils = window.TimeUtils;

  describe('Convert to 12 hour clock', function () {

    describe('A.M time', function () {
      it('should return midnight time', function () {
        expect(TimeUtils.convertTo12HoursTime('00:00:00')).toEqual('12:00:00 A.M.');
      });

      it('should return A.M. just after midnight time', function () {
        expect(TimeUtils.convertTo12HoursTime('00:59:00')).toEqual('12:59:00 A.M.');
      });

      it('should return A.M. time', function () {
        expect(TimeUtils.convertTo12HoursTime('01:20:05')).toEqual('01:20:05 A.M.');
      });
    });

    describe('P.M time', function () {
      it('should return noon time', function () {
        expect(TimeUtils.convertTo12HoursTime('12:00:00')).toEqual('12:00:00 P.M.');
      });

      it('should return P.M. just after noon time', function () {
        expect(TimeUtils.convertTo12HoursTime('12:59:00')).toEqual('12:59:00 P.M.');
      });

      it('should return P.M. time', function () {
        expect(TimeUtils.convertTo12HoursTime('23:10:05')).toEqual('11:10:05 A.M.');
      });
    });

  });
});
