export class FinalScore {
  final: string;
  athlete: string;
  performance_avg: string;
  quality_avg: string;
  count: number;

  constructor(final: string, athlete: string, performance_avg: string, quality_avg: string, count: number) {
    this.final = final;
    this.athlete = athlete;
    this.performance_avg = performance_avg;
    this.quality_avg = quality_avg;
    this.count = count;
  }
}
