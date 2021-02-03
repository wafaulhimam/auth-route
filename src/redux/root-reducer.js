import { combineReducers} from 'redux';
import authReducer from './authentication/reducers';

export default combineReducers({
    auth: authReducer,
    // review: reviewReducer
})