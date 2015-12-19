var chai = require('chai');
chai.use(require('chai-datetime'));
var expect = chai.expect;

var liturgicalYear = require('../lib/index.js');

describe('liturgicalYear', () => {
    var litYear = liturgicalYear(2016);

    var holidays = [
        {name: 'Holy Thursday', field: 'holyThursday', date: new Date(2016, 3, 24)},
        {name: 'Good Friday', field: 'goodFriday', date: new Date(2016, 3, 25)},
        {name: 'Easter', field: 'easter', date: new Date(2016, 3, 27)},
        {name: 'Easter Monday', field: 'easterMonday', date: new Date(2016, 3, 28)},
        {name: 'Ascension Day', field: 'ascensionDay', date: new Date(2016, 5, 5)},
        {name: 'Whitsunday', field: 'whitSunday', date: new Date(2016, 5, 15)},
        {name: 'Whitmonday', field: 'whitMonday', date: new Date(2016, 5, 16)},
        {name: 'Corpus Christi', field: 'corpusChristi', date: new Date(2016, 5, 26)},
        {name: 'Christmas Eve', field: 'christmasEve', date: new Date(2016, 12, 24)},
        {name: 'Christmas Day', field: 'christmasDay', date: new Date(2016, 12, 25)},
        {name: 'Day after Christmas', field: 'dayAfterChristmas', date: new Date(2016, 12, 26)}
    ];

    holidays.forEach(holiday => {
        it(`sould calculate date for ${holiday.name}.`, () => {
            expect(litYear[holiday.field]).to.equalDate(holiday.date);
        });
    });


    // ==== Utils ================
    it('dateDiff should work.', () => {
        var date = dateFromString('2016-03-01');
        expect(litYear._dateDiff(date, -1)).to.equalDate(dateFromString('2016-02-29'));
    });


    function dateFromString(str) {
        return new Date(Date.parse(str));
    }
});