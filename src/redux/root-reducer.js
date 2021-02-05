// root reducers will contain full states of the entire app
//-> all reducers with the help of combinereducers functionality 


import{combineReducers} from 'redux';
import userReducer from './user/user-reducer';

export default combineReducers({
    user:userReducer
})