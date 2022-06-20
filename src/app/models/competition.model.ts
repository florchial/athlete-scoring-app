import {Category} from "./category.model";

export class Competition {
  id: string;
  name: string;
  category: Category;

  constructor(id: string, name: string, category: Category) {
    this.id = id;
    this.name = name;
    this.category = category;
  }
}
