import * as ActionTypes from '../constant/actionTypes';
import lodash from 'lodash'

let defaultState = {
    selectedKey:['0-1']
}

export default function(state = defaultState, action = {}) {
    let newState = lodash.cloneDeep(defaultState)
    console.log(action)
    switch (action.type) {
      case ActionTypes.ROUTER_SELECT:
        newState.selectedKey = action.selectedKey
        console.log(newState)
        return newState
      default:
        return state;
    }
  }
  