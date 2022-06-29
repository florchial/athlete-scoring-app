export class Score {
  total: number;
  athlete: string;
  performance: number;
  quality: number;
  judge: string;


  constructor(total: number, athlete: string, performance: number, quality: number, judge: string) {
    this.total = total;
    this.athlete = athlete;
    this.performance = performance;
    this.quality = quality;
    this.judge = judge;
  }
}
