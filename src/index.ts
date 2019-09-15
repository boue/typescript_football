import fs from "fs";

// 2 dimensional array of strings
const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8"
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}

let chelseaWins = 0;

for (let match of matches) {
  if (match[1] === "Chelsea" && match[5] === MatchResult.HomeWin) {
    chelseaWins++;
  } else if (match[2] === "Chelsea" && match[5] === MatchResult.AwayWin) {
    chelseaWins++;
  }
}

console.log(chelseaWins);
