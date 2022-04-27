import React , {useState} from 'react';
import {connect} from 'react-redux';
import './App.css';

function CounterButton(props) {
  return (
    <p style={{display: "flex", flexDirection:"column", gap:"10px" }}>
      <button className="btn" onClick={ props.onIncreaseClick }>Increase</button>
      <button className="btn" onClick={ props.onDecreaseClick }>Decrease</button>
      <button className="btn" onClick={ props.onResetClick }>Reset</button>
    </p>
  )

}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function() { 
        dispatch( {type: 'increase'} ) 
    },
    onDecreaseClick: function() { 
        dispatch( {type: 'decrease'} ) 
    },
  
    onResetClick: function() { 
        dispatch( {type: 'reset'} ) 
    }
  }
}

export default connect(
    null, 
    mapDispatchToProps
)(CounterButton);