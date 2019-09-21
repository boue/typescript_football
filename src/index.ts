import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReports";
import { HtmlReport } from "./reportTargets/HtmlReport";

// create obj that satisfies 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");
// create an instance of MatchReader and pass in something satisfying
// the 'DataReader' Interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport("Chelsea");
summary.buildAndPrintReport(matchReader.matches);
