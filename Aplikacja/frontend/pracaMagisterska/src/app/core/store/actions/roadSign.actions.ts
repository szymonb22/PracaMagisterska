import { Action } from '@ngrx/store';
import { PagedSign, RoadSign } from '../../../layout/models/roadsign.model';

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

export const SEARCH_SIGN_START = "[RoadSign] SEARCH_SIGN_START";
export const SEARCH_SIGN_SUCCESS = "[RoadSign] SEARCH_SIGN_SUCCESS";
export const SEARCH_SIGN_FAILED = "[RoadSign] SEARCH_SIGN_FAILED";

export const LOAD_SIGNS = '[ROAD SIGNS] LOAD_SIGNS';
export const LOAD_SIGNS_SUCCESS = '[ROAD SIGNS] LOAD_SIGNS_SUCCESS';
export const LOAD_SIGNS_FAILED = '[ROAD SIGNS] LOAD_SIGNS_FAILED ';

export const INSERT_SIGNS = '[ROAD SIGNS] INSERT_SIGNSS';
export const INSERT_SIGNS_SUCCESS = '[ROAD SIGNS] INSERT_SIGNS_SUCCESS';
export const INSERT_SIGNS_FAILED = '[ROAD SIGNS] INSERT_SIGNS_FAILED';

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

export class SearchSignStart implements Action {
    readonly type = SEARCH_SIGN_START;
    constructor(public name: string) { }
}

export class SearchSignSuccess implements Action {
    readonly type = SEARCH_SIGN_SUCCESS;
    constructor(public searchResults: RoadSign[]) { }
}

export class SearchSignFailed implements Action {
    readonly type = SEARCH_SIGN_FAILED;
    constructor(public payload: any) { }
}

export class InsertSigns implements Action {
    readonly type = INSERT_SIGNS;
    constructor(public page: number) { }
}

export class InsertSignsSuccess implements Action {
    readonly type = INSERT_SIGNS_SUCCESS;
    constructor(public signList: PagedSign<RoadSign[]>, public page: number) { }
}

export class InsertSignsFailed implements Action {
    readonly type = INSERT_SIGNS_FAILED;
    constructor(public payload: any) { }
}

export class LoadSigns implements Action {
    readonly type = LOAD_SIGNS;
    constructor(public page: number) { }
}

export class LoadSignsSuccess implements Action {
    readonly type = LOAD_SIGNS_SUCCESS;
    constructor(public payload: PagedSign<RoadSign[]>) { }
}
export class LoadSignsFailed implements Action {
    readonly type = LOAD_SIGNS_FAILED;
    constructor(public payload: any) { }
}


export type RoadSignsActions = GetAllSignsStart | GetAllSignsSuccess | GetAllSignsFailed | GetSignsByCategoryStart | GetSignsByCategorySuccess 
    | GetSignsByCategoryFailed | AddSignStart | AddSignSuccess | AddSignFailed | EditSignStart | EditSignSuccess | EditSignFailed 
    | RemoveSignStart | RemoveSignSuccess | RemoveSignFailed | SearchSignStart | SearchSignSuccess | SearchSignFailed | InsertSigns 
    | InsertSignsSuccess | InsertSignsFailed | LoadSigns | LoadSignsSuccess | LoadSignsFailed;
    