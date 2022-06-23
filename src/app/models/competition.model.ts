import {AgeRange} from "./age-range.model";
import {Style} from "./style.model";

export class Competition {
  id: string;
  name: string;
  category: AgeRange;
  style: Style;

  constructor(id: string, name: string, category: AgeRange, style: Style) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.style = style
  }
}
