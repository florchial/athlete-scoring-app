export class Competition {
  _id: string;
  age_range: string;
  category: string;
  style: string;
  started: Boolean;
  finished: Boolean;
  competitors: string[];
  area: string;

  constructor(id: string, name: string, category: string, style: string, started: Boolean, athletes: string[], area: string) {
    this._id = id;
    this.age_range = name;
    this.category = category;
    this.style = style;
    this.started = started;
    this.finished = false;
    this.area = area;
    this.competitors = athletes
  }

}
