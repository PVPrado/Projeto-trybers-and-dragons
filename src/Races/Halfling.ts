import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static countHalflingInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    this.countHalflingInstance += 1;
    return this.countHalflingInstance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;