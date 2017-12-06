import { CHANGE_THEME} from '../actions/action_types';

const initialState =  {
    style: 'dark'
};

export default function ThemeReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_THEME:
            return Object.assign({}, state, {
                style: [action.payload]
            });
        default:
            return state;
    }
}