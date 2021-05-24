import { Injectable } from '@angular/core';
import * as UserActions from '../actions/user.actions';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Injectable()
export class UserEffects {
    getUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.GET_USER_START),
        switchMap((action: UserActions.GetUserStart) => {
            return this.userService.getUserById(action.userId).pipe(
                map((user:User) => new UserActions.GetUserSuccess(user)),
                catchError((error: string) => of(new UserActions.GetUserFailed(error)))
            );
        }))
    );

    newUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.NEW_USER_START),
        switchMap((action: UserActions.NewUserStart) => {
            return this.userService.registerUser(action.payload).pipe(
                map(() => new UserActions.NewUserSuccess() ),
                catchError((error: string) => of(new UserActions.NewUserFailed(error)))
            );
        })
    ));

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }
}
