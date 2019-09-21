"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var Summary_1 = require("./Summary");
// create obj that satisfies 'DataReader' interface
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
// create an instance of MatchReader and pass in something satisfying
// the 'DataReader' Interface
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport("Chelsea");
summary.buildAndPrintReport(matchReader.matches);
