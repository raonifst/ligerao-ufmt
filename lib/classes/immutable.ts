/**
 * Protótipo (esqueleto) para as classes de BusStop e Message, provendo atributos comum a ambas.
 */
export abstract class Immutable {

  index: number;

  name: string;

  constructor(index: number, name: string) {
    this.index = index;
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getIndex() {
    return this.index;
  }

}
