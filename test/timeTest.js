import assert from 'assert';
import {
    minutesToSeconds,
    secondsToMilliseconds,
    formatToMinutesAndSeconds,
} from '../helpers/time';

describe('#Helper Test', function() {

    describe('#minutesToSeconds', function() {
        it('Must to convert correctly', function() {
            // 25 minutes in seconds
            const expected = 25 * 60;
            assert.equal(minutesToSeconds(25), expected);
        });

        it('Must throw Error if argument is negative', function() {
            assert.throws(
                () => minutesToSeconds(-25),
                Error
            );
        });
    });

    describe('#secondsToMilliseconds', function() {
        it('Must to convert correctly', function() {
            // 25 minutes in milliseconds
            const expected = 25 * 1000;
            assert.equal(secondsToMilliseconds(25), expected);
        });

        it('Must throw Error if argument is negative', function() {
            assert.throws(
                () => secondsToMilliseconds(-25),
                Error
            );
        });
    });

    describe('#formatToMinutesAndSeconds', function() {
        it('Must to format correctly', function() {
            const expected = '02:00';

            // 2 minutes in seconds
            assert.equal(formatToMinutesAndSeconds(120), expected);
        });

        it('Must throw Error if argument is negative', function() {
            assert.throws(
                () => formatToMinutesAndSeconds(-25),
                Error
            );
        });
    });
});
