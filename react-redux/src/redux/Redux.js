import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux';

//action creators (customers dropping off forms)
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: amount,
    },
  };
};

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name,
    },
  };
};

const createClaim = (name, moneyToGet) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      moneyToGet: moneyToGet,
    },
  };
};


// REDUCERS (departments) ------------------------
const claims = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM'){
    // we care about this action (form)
    // 1. oldListOfClaims.push(action.payload) = BAD b/c it changes the original array
    // 2. return [...oldListOfClaims, action.payload] = GOOD b/c it creates a new array. ALWAYS USE ...THIS
    return [...oldListOfClaims, action.payload] //joins 2 arrs
  } else {
    // we don't care about this action (form)
    return oldListOfClaims;
  }
}

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.moneyToGet
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.moneyToGet;
  } else {
    return bagOfMoney;
  }
}

const policies = (oldListOfPolicies = [], action) => {
  if (action.type === 'CREATE_POLICY'){
    return [...oldListOfPolicies, action.payload.name]
  } else if (action.type === 'DELETE_POLICY') {
    return oldListOfPolicies.filter(name => name !== action.payload.name)
  } else {
    return oldListOfPolicies;
  }
}

// all departments
const ourDepartments = combineReducers({
  accounting: accounting,
  claims: claims,
  policies: policies
})



export default class Redux extends Component {
  redux(){
    const store = createStore(ourDepartments);
    console.log("store", store);
    
  };
  render() {
    return (
      <div>
        {this.redux()}
        redux here!
      </div>
    )
  }
}
