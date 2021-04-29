import * as ActionTypes from '../constant/actionTypes';
import lodash from 'lodash'

let defaultState = {
  authority:[],
  routerAuthority:[]
}
export default function(state = defaultState, action = {}) {
    let newState = lodash.cloneDeep(state)
    switch (action.type) {
      case ActionTypes.USER_AUTHORITY:
        newState.authority = action.authority
        return newState
      case ActionTypes.ROUTER_AUTHORITY:
        newState.routerAuthority = action.routerAuthority
        return newState
      default:
        return state;
    }
  }
  