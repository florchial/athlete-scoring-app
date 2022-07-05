export class Score {
  total: string;
  athlete: string;
  performance: string;
  quality: string;
  judge: string;


  constructor(total: string, athlete: string, performance: string, quality: string, judge: string) {
    this.total = total;
    this.athlete = athlete;
    this.performance = performance;
    this.quality = quality;
    this.judge = judge;
  }
}
