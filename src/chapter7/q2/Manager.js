import {Employee} from './Employee';
import {Rank} from './Rank';

export class Manager extends Employee {
    constructor(callHandler) {
      super(callHandler);
      this.rank = Rank.Manager;
    }
}
