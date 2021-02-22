import { action, makeObservable, observable } from 'mobx';
import axios from 'axios';

export const initialUser = {
  userList: [],
};

class UserStore {
  userList = [];

  constructor(initialData = initialUser) {
    this.userList = initialData.userList;
    makeObservable(this, {
      userList: observable,
      getUserList: action,
    });
  }

  getUserList = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        this.userList = response.data;
      })
      .catch((response) => {
        console.error(response);
      });
  };
}

export default UserStore;
