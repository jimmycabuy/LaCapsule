import React , {useState} from 'react';
import {connect} from 'react-redux';
import './App.css';

function CounterButton(props) {
  return (
    <button className="btn" onClick={ props.onIncreaseClick }>Increase</button>
  )

}


function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: function() { 
        dispatch( {type: 'increase'} ) 
    }
  }
}

export default connect(
    null, 
    mapDispatchToProps
)(CounterButton);