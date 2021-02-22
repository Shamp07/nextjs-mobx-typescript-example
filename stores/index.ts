import { enableStaticRendering } from 'mobx-react-lite';
import CountStore from './CountStore';
import UserStore, { initialUser } from './UserStore';

const isServer = typeof window === 'undefined';
enableStaticRendering(isServer);

let store: RootStore | null = null;
const initialRoot = {
  UserStore: initialUser,
};

export class RootStore {
  CountStore: CountStore;

  UserStore: UserStore;

  constructor(initialData: any) {
    this.CountStore = new CountStore();
    this.UserStore = new UserStore(initialData.UserStore);
  }
}

const initializeStore = (initialData = initialRoot) => {
  if (isServer) {
    return new RootStore(initialData);
  }
  if (store === null) {
    store = new RootStore(initialData);
  }
  return store;
};

export default initializeStore;
