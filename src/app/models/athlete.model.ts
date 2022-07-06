export class Athlete {
  _id: string;
  name: string;
  country: string;
  code: string;

  constructor(id: string, name: string, country: string, code: string) {
    this._id = id
    this.name = name
    this.country = country
    this.code = code
  }

}
