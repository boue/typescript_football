"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchResult_1 = require("./MatchResult");
// create obj that satisfies 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// create an instance of MatchReader and pass in something satisfying
// the 'DataReader' Interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var chelseaWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Chelsea" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        chelseaWins++;
    }
    else if (match[2] === "Chelsea" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        chelseaWins++;
    }
}
console.log(chelseaWins);
