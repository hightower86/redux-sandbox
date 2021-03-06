import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

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

const mapStateToProps = (state) => {
  return {
    counter: state
  }
};

export default connect(mapStateToProps, actions)(Counter);