import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

// create obj that satisfies 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");
// create an instance of MatchReader and pass in something satisfying
// the 'DataReader' Interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let chelseaWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Chelsea" && match[5] === MatchResult.HomeWin) {
    chelseaWins++;
  } else if (match[2] === "Chelsea" && match[5] === MatchResult.AwayWin) {
    chelseaWins++;
  }
}

console.log(chelseaWins);
