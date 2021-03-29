import { Action } from '@ngrx/store';
import { User } from '../../../core/models/user.model';

export const NEW_USER_START = "[User] New_USER_START";
export const NEW_USER_SUCCESS = "[User] New_USER_SUCCESS";
export const NEW_USER_FAILED = "[User] New_USER_FAILED";

export const GET_USER_START = "[User] GET_USER_START";
export const GET_USER_SUCCESS = "[User] GET_USER_SUCCESS";
export const GET_USER_FAILED = "[User] GET_USER_FAILED";

export class NewUserStart implements Action {
    readonly type = NEW_USER_START;
    constructor(public payload: User) { }
}

export class NewUserSuccess implements Action {
    readonly type = NEW_USER_SUCCESS;
    constructor(public payload?: any) { }
}

export class NewUserFailed implements Action {
    readonly type = NEW_USER_FAILED;
    constructor(public payload?: any) { }
}

export class GetUserStart implements Action {
    readonly type = GET_USER_START;
    constructor(public userId: number) { }
}

export class GetUserSuccess implements Action {
    readonly type = GET_USER_SUCCESS;
    constructor(public payload: User) { }
}

export class GetUserFailed implements Action {
    readonly type = GET_USER_FAILED;
    constructor(public payload?: string) { }
}

export type UserActions = NewUserStart | NewUserSuccess | NewUserFailed | GetUserStart | GetUserSuccess | GetUserFailed;