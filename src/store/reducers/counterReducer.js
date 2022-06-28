import {INCREMENT, DECREMENT} from '../actionTypes'

const initialstate = {
    counter : 0,
    user: {username: "john doe"},
    error: null,
    isAuthenticated: false
}
const counterReducer = (state = initialstate, {type ,payload}) => {
  switch (type){
      case INCREMENT:
          return{
              ...state,
              counter: state.counter + payload
          }
      case DECREMENT:
          return{
              ...state,
              counter: state.counter - payload
  }
  default:
      return state
  }
}

export default counterReducer;