import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  energyType: EnergyType;
  private static countWarriorInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    this.countWarriorInstances += 1;
    return this.countWarriorInstances;
  }
}

export default Warrior;