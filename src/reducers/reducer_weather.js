import { FETCH_WEATHER } from '../actions/index'

export default function WeatherReducer (state = [], action){
  //Middleware redux-promise ensures the package is not a promise
  console.log('Action received',action);

  switch ( action.type ) {
    case FETCH_WEATHER:
      //Returns brand new state
      if (action.payload.data) {
        return [action.payload.data, ...state]; //[city, city,]
      }
  }


  return state;
}
