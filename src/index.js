import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

import { createStore, bindActionCreators } from 'redux';
import * as actions from './actions';
import reducer from './reducer';

const store = createStore(reducer);
const { dispatch } = store;

const { inc, dec, rnd } = 
bindActionCreators(actions, dispatch);

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(<Counter 
                counter={0} inc={inc} dec={dec} rnd={rnd}
                />,
                document.getElementById('root'));


  const update = () => {
    document
      .getElementById('counter')
      .innerHTML = store.getState();
  }

  store.subscribe(update);