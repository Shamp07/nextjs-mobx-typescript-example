import React from 'react';
import { observer } from 'mobx-react-lite';
import useStores from '../stores/useStores';

const Counter = () => {
  const { CountStore } = useStores();
  const { value, increment, decrement } = CountStore;
  return (
    <div>
      {value}
      <button type="button" onClick={increment}>+</button>
      <button type="button" onClick={decrement}>-</button>
    </div>
  );
};

export default observer(Counter);
