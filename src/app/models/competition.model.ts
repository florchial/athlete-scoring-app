import {Style} from "./style.model";

export class Competition {
  _id: string;
  type: string;
  category: string;
  style: string;
  started: Boolean;
  finished: Boolean;
  competitors: string[];

  constructor(id: string, name: string, category: string, style: string, started: Boolean, athletes: string[]) {
    this._id = id;
    this.type = name;
    this.category = category;
    this.style = style;
    this.started = started;
    this.finished = false;
    this.competitors = athletes
  }

}
