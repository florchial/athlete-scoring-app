import {Revision} from "./revision.model";

export class FinalScore {
  final: number;
  athlete: string;
  performance_avg: number;
  quality_avg: number;
  count: number;
  position: number;
  revisions: Revision[];

  constructor(final: number, athlete: string, performance_avg: number, quality_avg: number, count: number, position: number, revision: Revision[]) {
    this.final = final;
    this.athlete = athlete;
    this.performance_avg = performance_avg;
    this.quality_avg = quality_avg;
    this.count = count;
    this.position = position;
    this.revisions = revision;
  }
}
