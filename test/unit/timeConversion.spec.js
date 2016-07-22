describe('exercise1', function () {
  'use strict';

  var TimeUtils = window.TimeUtils;
  var helperUtils = window.helperUtils;

  describe('Convert to 12 hour clock', function () {

    //Random minutes to avoid hack
    var minutes = helperUtils.validMinutes();

    describe('A.M time', function () {
      it('should return midnight time', function () {
        expect(TimeUtils.convertTo12HoursTime('00:' + minutes + ':00')).toEqual('12:' + minutes + ':00 A.M.');
      });

      it('should return A.M. just after midnight time', function () {
        expect(TimeUtils.convertTo12HoursTime('00:' + minutes + ':00')).toEqual('12:' + minutes + ':00 A.M.');
      });

      it('should return A.M. time', function () {
        expect(TimeUtils.convertTo12HoursTime('01:' + minutes + ':05')).toEqual('01:' + minutes + ':05 A.M.');
      });
    });

    describe('P.M time', function () {
      it('should return noon time', function () {
        expect(TimeUtils.convertTo12HoursTime('12:' + minutes + ':00')).toEqual('12:' + minutes + ':00 P.M.');
      });

      it('should return P.M. just after noon time', function () {
        expect(TimeUtils.convertTo12HoursTime('12:' + minutes + ':00')).toEqual('12:' + minutes + ':00 P.M.');
      });

      it('should return P.M. time', function () {
        expect(TimeUtils.convertTo12HoursTime('23:' + minutes + ':05')).toEqual('11:' + minutes + ':05 P.M.');
      });
    });

    describe('When input is invalid', function () {

      var invalidInputs = [];
      invalidInputs.push(helperUtils.invalidHours() + ':59:00');
      invalidInputs.push('23:' + helperUtils.invalidMinutes() + ':00');
      invalidInputs.push('23:00:' + helperUtils.invalidSeconds());
      invalidInputs.push(helperUtils.randomString(12));
      invalidInputs.push(helperUtils.validHours() + ';' + helperUtils.validMinutes() + ';' + helperUtils.validSeconds());

      console.log(invalidInputs);


      invalidInputs.forEach(function (item) {
        it('should throw exception', function () {
          var fn = function () {
            TimeUtils.convertTo12HoursTime(item);
          };
          expect(fn).toThrow();
        });
      });


    });

  });
});
