import React from 'react';

const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className='jumbotron mt-2'>
      <h2>{counter}</h2>
      <button id='dec' className='btn btn-primary btn-lg mr-2'
              onClick={dec}>
        DEC (-)
      </button>
      <button id='inc' className='btn btn-primary btn-lg mr-2'
              onClick={inc}>
        INC (+)
      </button>
      <button id='rnd' className='btn btn-primary btn-lg'
              onClick={rnd}>
        RAND.
      </button>
    </div>
  );
};

export default Counter;