import { Action } from '@ngrx/store';
import { RoadSign } from '../../../layout/models/roadsign.model';

export const GET_ALL_ROAD_SIGNS_START = "[RoadSigns] GET_ALL_ROAD_SIGNS_START";
export const GET_ALL_ROAD_SIGNS_SUCCESS = "[RoadSigns] GET_ALL_ROAD_SIGNS_SUCCESS";
export const GET_ALL_ROAD_SIGNS_FAILED = "[RoadSigns] GET_ALL_ROAD_SIGNS_FAILED";

export const ADD_SIGN_START = "[RoadSign] ADD_SIGN_START";
export const ADD_SIGN_SUCSSESS = "[RoadSign] ADD_SIGN_SUCSSESS";
export const ADD_SIGN_FAILED = "[RoadSign] ADD_SIGN_FAILED";

export const EDIT_SIGN_START = "[RoadSign] EDIT_SIGN_START";
export const EDIT_SIGN_SUCCESS = "[RoadSign] EDIT_SIGN_SUCCESS";
export const EDIT_SIGN_FAILED = "[RoadSign] EDIT_SIGN_FAILED";

export const REMOVE_SIGN_START = "[RoadSign] REMOVE_SIGN_START";
export const REMOVE_SIGN_SUCCESS = "[RoadSign] REMOVE_SIGN_SUCCESS";
export const REMOVE_SIGN_FAILED = "[RoadSign] REMOVE_SIGN_FAILED";

export const GET_BY_CATEGORY_START = "[RoadSigns] GET_BY_CATEGORY_START";
export const GET_BY_CATEGORY_SUCCESS = "[RoadSigns] GET_BY_CATEGORY_SUCCESS";
export const GET_BY_CATEGORY_FAILED = "[RoadSigns] GET_BY_CATEGORY_FAILED";

export class GetAllSignsStart implements Action {
    readonly type = GET_ALL_ROAD_SIGNS_START;
}

export class GetAllSignsSuccess implements Action {
    readonly type = GET_ALL_ROAD_SIGNS_SUCCESS;
    constructor(public payload: RoadSign[]) { }
}

export class GetAllSignsFailed implements Action {
    readonly type = GET_ALL_ROAD_SIGNS_FAILED;
    constructor(public payload: any) { }
}

export class AddSignStart implements Action {
    readonly type = ADD_SIGN_START;
    constructor(public payload: RoadSign) { }
}

export class AddSignSuccess implements Action {
    readonly type = ADD_SIGN_SUCSSESS;
    constructor(public payload?: any) { }
}

export class AddSignFailed implements Action {
    readonly type = ADD_SIGN_FAILED;
    constructor(public payload?: any) { }
}

export class EditSignStart implements Action {
    readonly type = EDIT_SIGN_START;
    constructor(public signId: number, public editSign: RoadSign) { }
}

export class EditSignSuccess implements Action {
    readonly type = EDIT_SIGN_SUCCESS;
    constructor(public payload?: any) { }
}

export class EditSignFailed implements Action {
    readonly type = EDIT_SIGN_FAILED;
    constructor(public payload?: any) { }
}

export class RemoveSignStart implements Action {
    readonly type = REMOVE_SIGN_START;
    constructor(public signId: number) { }
}

export class RemoveSignSuccess implements Action {
    readonly type = REMOVE_SIGN_SUCCESS;
    constructor(public payload?: string) { }
}

export class RemoveSignFailed implements Action {
    readonly type = REMOVE_SIGN_FAILED;
    constructor(public payload?: string) { }
}

export class GetSignsByCategoryStart implements Action {
    readonly type = GET_BY_CATEGORY_START;
    constructor(public category: string) { }
}

export class GetSignsByCategorySuccess implements Action {
    readonly type = GET_BY_CATEGORY_SUCCESS;
    constructor(public signByCategory: RoadSign[]) { }
}

export class GetSignsByCategoryFailed implements Action {
    readonly type = GET_BY_CATEGORY_FAILED;
    constructor(public payload: any) { }
}

export type RoadSignsActions = GetAllSignsStart | GetAllSignsSuccess | GetAllSignsFailed | GetSignsByCategoryStart | GetSignsByCategorySuccess 
    | GetSignsByCategoryFailed | AddSignStart | AddSignSuccess | AddSignFailed | EditSignStart | EditSignSuccess | EditSignFailed 
    | RemoveSignStart | RemoveSignSuccess | RemoveSignFailed;
    