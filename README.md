#liturgical-year [![Build Status](https://travis-ci.org/SteKoe/liturgical-year.svg?branch=master)](https://travis-ci.org/SteKoe/liturgical-year)

This package calculates liturgical holidays of a given year.

## Usage
```
var liturgicalYear = require('liturgical-year');
var liturgicalDates = liturgicalYear(2016);

// e.g. whitsunday:
var whitsunday = liturgicalDates.whitsunday;
```

## Run tests
```npm test```

## License
[Apache 2.0](LICENSE)
