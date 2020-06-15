export default class ItemModel {
  name: string;
  homeworld: string;
  isFavorite: boolean;

  constructor() {
    this.name = "";
    this.homeworld = "";
    this.isFavorite = false;
  }
}