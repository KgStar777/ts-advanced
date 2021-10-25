import { csvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./util";
import { MatchesResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchesResult, string]

export class MatchReader extends csvFileReader<MatchData> {
    mapRow(row: string[]): MatchData {
        return [
            dateStringToDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchesResult,
            row[6]
        ]
    }
}