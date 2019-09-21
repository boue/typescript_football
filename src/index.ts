import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

// create obj that satisfies 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");
// create an instance of MatchReader and pass in something satisfying
// the 'DataReader' Interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
