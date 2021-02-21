import { action, makeObservable, observable } from 'mobx';

class CountStore {
  value = 0;

  constructor() {
    makeObservable(this, {
      value: observable,
      increment: action,
      decrement: action,
    });
  }

  increment = () => {
    this.value += 1;
  };

  decrement = () => {
    this.value -= 1;
  };
}

export default CountStore;
