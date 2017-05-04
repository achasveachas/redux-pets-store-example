import { combineReducers, createStore } from 'redux';
import pets from '../reducers/pets';

const reducers = combineReducers({
  pets
})

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

