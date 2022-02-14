import { createStore , applyMiddleware , combineReducers } from 'redux';
import thunk from 'redux-thunk'
import authErrorReducer from './reducers/AuthErrorReducer';
import authReducer from './reducers/AuthReducer';
import uploadTaskReducer from './reducers/UploadTaskReducer';

const rootReducer = combineReducers({
    authState : authReducer,
    authError : authErrorReducer,
    tasks : uploadTaskReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;