import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  energyType: EnergyType;
  private static countMageInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    this.countMageInstances += 1;
    return this.countMageInstances;
  }
}

export default Mage;