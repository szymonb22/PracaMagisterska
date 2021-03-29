import { ActionReducerMap } from '@ngrx/store';
import * as fromRoadSigns from './reducers/roadSign.reducer';
import * as fromUser from './reducers/user.reducer';


export interface AppState {
    roadSigns: fromRoadSigns.State;
    user: fromUser.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    roadSigns: fromRoadSigns.RoadSignReducer,
    user: fromUser.UserReducer,
};
