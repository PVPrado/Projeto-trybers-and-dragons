import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static countElfInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    this.countElfInstance += 1;
    return this.countElfInstance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;