import { combineReducers} from 'redux';
import authReducer from './authentication/reducers';
// import reviewReducer from './review/reducers';

export default combineReducers({
    auth: authReducer,
    // review: reviewReducer
})