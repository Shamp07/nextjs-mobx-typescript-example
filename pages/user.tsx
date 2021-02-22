import React from 'react';
import useStores from '../stores/useStores';

interface UserData {
  id: number;
  email: string;
  username: string;
}

const User = () => {
  const { UserStore } = useStores();
  const { userList } = UserStore;

  return (
    <div>
      <h1>유저 리스트</h1>
      {userList.map((data: UserData) => (
        <div key={data.id}>
          {data.id}
          {data.email}
          {data.username}
        </div>
      ))}
    </div>
  );
};

User.getInitialProps = async ({ store }: any) => {
  const { UserStore } = store;
  const { getUserList } = UserStore;
  await getUserList();

  return {
    props: {},
  };
};

export default User;
