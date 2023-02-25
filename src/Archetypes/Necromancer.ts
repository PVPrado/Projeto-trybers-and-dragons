import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  energyType: EnergyType;
  private static countNecromancerInstances = 0;

  constructor(name: string) {
    super(name);
    this.energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    this.countNecromancerInstances += 1;
    return this.countNecromancerInstances;
  }
}

export default Necromancer;