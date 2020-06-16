export default class ItemModel {
  name: string;
  homeworld: string;
  isFavorite: boolean;

  constructor(name?: string, homeworld?: string) {
    this.name = name || "";
    this.homeworld = homeworld || "";
    this.isFavorite = false;
  }
}