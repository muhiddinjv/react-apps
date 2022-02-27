import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux';

console.clear();

//action creators (customers dropping off forms)
const createPolicy = (name, deposit) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      deposit: deposit,
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

const createClaim = (name, withdraw) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      withdraw: withdraw,
    },
  };
};


// REDUCERS (departments) ------------------------
const claims = (oldListOfClaims = [], action) => {
  if (action.type === 'CREATE_CLAIM'){
    // we care about this action (form)
    // 1. oldListOfClaims.push(action.payload) = BAD b/c it changes the original array
    // 2. return [...oldListOfClaims, action.payload] = GOOD b/c it creates a new array. ALWAYS USE ...THIS
    return [...oldListOfClaims, action.payload] //joins arrays
  } else {
    // we don't care about this action (form)
    return oldListOfClaims;
  }
}

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === 'CREATE_CLAIM'){
    return bagOfMoney - action.payload.withdraw
  } else if (action.type === 'CREATE_POLICY') {
    return bagOfMoney + action.payload.deposit;
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
  claims: claims,
  policies: policies,
  accounting: accounting,
})

const store = createStore(ourDepartments);

const clients = [
  {
    name: 'Dean',
    deposit: 20,
  },{
    name: 'Mike',
    deposit: 40,
  },{
    name: 'Lola',
    deposit: 60,
  },{
    name: 'Lilly',
    deposit: 80,
  },{
    name: 'Don',
    deposit: 100,
  }
]

clients.map(client=>{
  return store.dispatch(createPolicy(client.name, client.deposit))
})

clients.map(client=>{
  return store.dispatch(createClaim(client.name, client.deposit))
})

store.dispatch(deletePolicy('Dean'))
const dispatched = store.getState()


export default class Redux extends Component {
  
  render() {
   function redux(){
    console.log("dispatch: ", dispatched);
  };

    return (
      <h1>
        {redux()}
        redux here!
      </h1>
    )
  }
}
