"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("./MatchResult");
// create obj that satisfies 'DataReader' interface
// create an instance of MatchReader and pass in something satisfying
// the 'DataReader' Interface
var chelseaWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Chelsea" && match[5] === MatchResult_1.MatchResult.HomeWin) {
        chelseaWins++;
    }
    else if (match[2] === "Chelsea" && match[5] === MatchResult_1.MatchResult.AwayWin) {
        chelseaWins++;
    }
}
console.log(chelseaWins);
