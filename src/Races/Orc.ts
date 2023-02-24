import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static countOrcInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    this.countOrcInstance += 1;
    return this.countOrcInstance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;