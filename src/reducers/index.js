import { combineReducers } from 'redux';
import AuthReducer from './auth';
import BlogReducer from './blog';
import ThemeReducer from './theme';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
    auth: AuthReducer,
    form: FormReducer,
    blogs: BlogReducer,
    theme: ThemeReducer
});

export default rootReducer;