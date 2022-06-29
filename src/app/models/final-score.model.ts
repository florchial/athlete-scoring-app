export class FinalScore {
  final: number;
  athlete: string;
  performance_avg: number;
  quality_avg: number;

  constructor(final: number, athlete: string, performance_avg: number, quality_avg: number) {
    this.final = final;
    this.athlete = athlete;
    this.performance_avg = performance_avg;
    this.quality_avg = quality_avg;
  }
}
