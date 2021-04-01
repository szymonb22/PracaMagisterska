import * as RoadSignsActions from '../actions/roadSign.actions';
import { RoadSign } from '../../../layout/models/roadsign.model';
export interface State {
    allRoadSigns: RoadSign[];
    newSign: RoadSign;
    signByCategory: RoadSign[];
    loading: boolean;
    loadded: boolean;
    editSign: RoadSign;
    searchSign: RoadSign[];
}

const initialState = {
    allRoadSigns: [],
    newSign: null,
    signByCategory: [],
    searchSign: [],
    editSign: null,
    loading: false,
    loadded: false
}

export function RoadSignReducer(state: State = initialState, action: RoadSignsActions.RoadSignsActions) {
    switch (action.type) {
        case RoadSignsActions.GET_ALL_ROAD_SIGNS_START: {
            return {
                ...state,
                loading: true
            };
        }
        case RoadSignsActions.GET_ALL_ROAD_SIGNS_SUCCESS: {
            return {
                ...state,
                loading: false,
                loadded: true,
                allRoadSigns: action.payload
            };
        }
        case RoadSignsActions.GET_ALL_ROAD_SIGNS_FAILED: {
            return {
                ...state,
                loading: false,
                loadded: false
            };
        }
        case RoadSignsActions.GET_BY_CATEGORY_START: {
            return {
                ...state,
                loading: true
            };
        }
        case RoadSignsActions.GET_BY_CATEGORY_SUCCESS: {
            return {
                ...state,
                loading: false,
                loadded: true,
                signByCategory: action.signByCategory
            };
        }
        case RoadSignsActions.GET_BY_CATEGORY_FAILED: {
            return {
                ...state,
                loading: false,
                loadded: false
            };
        }
        case RoadSignsActions.ADD_SIGN_START: {
            return {
                ...state,
                newSign: action.payload
            };
        }
        case RoadSignsActions.ADD_SIGN_SUCSSESS: {
            return {
                ...state,
            };
        }
        case RoadSignsActions.ADD_SIGN_FAILED: {
            return {
                ...state
            };
        }
        case RoadSignsActions.EDIT_SIGN_START: {
            return {
                ...state,
                editSign: action.editSign,
                editId: action.signId
            };
        }
        case RoadSignsActions.EDIT_SIGN_SUCCESS: {
            return {
                ...state,
            };
        }
        case RoadSignsActions.EDIT_SIGN_FAILED: {
            return {
                ...state
            };
        }
        case RoadSignsActions.SEARCH_SIGN_START:
            return {
                ...state,
            };
        case RoadSignsActions.SEARCH_SIGN_SUCCESS:
            return {
                ...state,
                searchSign: action.searchResults,
            };
        case RoadSignsActions.SEARCH_SIGN_FAILED:
            return {
                ...state,
                error: action.payload,
            };
        default: return state;
    }
}
