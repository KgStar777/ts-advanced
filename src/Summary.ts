import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HTMLReport } from "./reportTargets/HtmlReport";

// наглядный пример композиции, который сам ничего не производит, но
// делегирует задачи
export interface Analyzer {
    run(matches: MatchData[]): string
}

export interface OutputTarget {
    print(report: string): void;
}


export class Summary {

    static winsAnalysisWithHtmlReport(team: string): Summary {
        return new Summary(new WinsAnalysis(team), new HTMLReport())
    }

    constructor(public analyzer: Analyzer, public OutputTarget: OutputTarget) {}

    buildAndPrintReport(matches: MatchData[]): void {
        const output = this.analyzer.run(matches);
        this.OutputTarget.print(output)
    }
}