import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  energyType: EnergyType;
  private static countRangerInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    this.countRangerInstances += 1;
    return this.countRangerInstances;
  }
}

export default Ranger;