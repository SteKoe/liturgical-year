exports = module.exports = function (year) {
    var easter = calculateEaster(year);

    return {
        holyThursday: dateDiff(easter, -3),
        goodFriday: dateDiff(easter, -2),
        easter: easter,
        easterMonday: dateDiff(easter, +1),
        ascensionDay: dateDiff(easter, +39),
        whitSunday: dateDiff(easter, +49),
        whitMonday: dateDiff(easter, +50),
        corpusChristi: dateDiff(easter, +60),

        christmasEve: new Date(year, 12, 24),
        christmasDay: new Date(year, 12, 25),
        dayAfterChristmas: new Date(year, 12, 26),

        _dateDiff: dateDiff
    };

    function calculateEaster(year) {
        var century = Math.floor(year / 100);
        var N = year - 19 * Math.floor(year / 19);
        var K = Math.floor((century - 17) / 25);
        var I = century - Math.floor(century / 4) - Math.floor((century - K) / 3) + 19 * N + 15;
        I = I - 30 * Math.floor((I / 30));
        I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));
        var J = year + Math.floor(year / 4) + I + 2 - century + Math.floor(century / 4);
        J = J - 7 * Math.floor(J / 7);
        var L = I - J;

        var month = 3 + Math.floor((L + 40) / 44);
        var day = L + 28 - 31 * Math.floor(month / 4);

        return new Date(year, month, day);
    }

    function dateDiff(date, days) {
        var d = new Date(date);
        d.setDate(d.getDate() + days);
        return d;
    }
};

