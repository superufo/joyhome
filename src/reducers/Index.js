import  {combineReducers} from 'redux';
import  AuthLoginReduce from './AuthLoginReduce';

export default combineReducers({
        auth:AuthLoginReduce,
        test:"test"
});