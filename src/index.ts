import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

// create obj that satisfies 'DataReader' interface

// create an instance of MatchReader and pass in something satisfying
// the 'DataReader' Interface

let chelseaWins = 0;

for (let match of reader.data) {
  if (match[1] === "Chelsea" && match[5] === MatchResult.HomeWin) {
    chelseaWins++;
  } else if (match[2] === "Chelsea" && match[5] === MatchResult.AwayWin) {
    chelseaWins++;
  }
}

console.log(chelseaWins);
