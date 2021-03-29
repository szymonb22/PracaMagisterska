import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as UserActions from '../store/actions/user.actions';
import { User } from 'src/app/core/models/user.model';

@Injectable()
export class UserSandbox {
    constructor(private store: Store<fromApp.AppState>) { }

    getUser(userId: number) {
        this.store.dispatch(new UserActions.GetUserStart(userId));
        return this.store.select('user');
    }

    newUser(user: User) {
        this.store.dispatch(new UserActions.NewUserStart(user));
        return this.store.select(state => state.user.newUser);
    }

}
