import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static countDwarfInstance = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    this.countDwarfInstance += 1;
    return this.countDwarfInstance;
  }
}

export default Dwarf;