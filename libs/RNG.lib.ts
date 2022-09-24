export class RNG {
  private includeLimits: boolean;
  private onlyInteger: boolean;

  constructor(include = true, onlyInteger = true) {
    this.includeLimits = include;
    this.onlyInteger = onlyInteger;
  }

  returnOutputNumber(number: number) {
    if (this.onlyInteger) {
      return Math.round(number);
    }
    return number;
  }

  between(min: number, max: number): number {
    let number;
    if (this.includeLimits) {
      number = Math.floor(Math.random() * (max - min + 1) + min);
    } else {
      number = Math.floor(Math.random() * (max - min) + min);
    }
    return this.returnOutputNumber(number);
  }
}
