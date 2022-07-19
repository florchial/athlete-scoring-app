export class FinalScore {
  final: string;
  athlete: string;
  performance_avg: string;
  quality_avg: string;
  count: number;
  position: number;

  constructor(final: string, athlete: string, performance_avg: string, quality_avg: string, count: number, position:number) {
    this.final = final;
    this.athlete = athlete;
    this.performance_avg = performance_avg;
    this.quality_avg = quality_avg;
    this.count = count;
    this.position = position;
  }
}
