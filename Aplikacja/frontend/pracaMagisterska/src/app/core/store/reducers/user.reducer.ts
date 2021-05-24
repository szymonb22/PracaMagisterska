import * as UserActions from '../actions/user.actions';
import { User } from '../../../core/models/user.model';

export interface State {
    newUser: User;
    userDetail:User;
    loading: boolean;
    loadded: boolean;
}

const initialState = {
    newUser: null,
    userDetail:null,
    loading: false,
    loadded: false
}

export function UserReducer(state: State = initialState, action: UserActions.UserActions) {
    switch (action.type) {
        case UserActions.GET_USER_START: {
            return {
                ...state,
                loading: true
            };
        }
        case UserActions.GET_USER_SUCCESS: {
            return {
                ...state,
                loading: false,
                loadded: true,
                userDetail: action.payload
            };
        }
        case UserActions.GET_USER_FAILED: {
            return {
                ...state,
                loading: false,
                loadded: false
            };
        }
        case UserActions.NEW_USER_START: {
            return {
                ...state,
                newUser: action.payload
            };
        }
        case UserActions.NEW_USER_SUCCESS: {
            return {
                ...state,
            };
        }
        case UserActions.NEW_USER_FAILED: {
            return {
                ...state
            };
        }
        default: return state;
    }
}
