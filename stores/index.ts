import CountStore from './CountStore';

class RootStore {
  CountStore: CountStore;

  constructor() {
    this.CountStore = new CountStore();
  }
}

export default new RootStore();
