import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as RoadSignActions from '../store/actions/roadSign.actions';
import { RoadSign } from 'src/app/layout/models/roadsign.model';

@Injectable()
export class RoadSignSandbox {
    constructor(private store: Store<fromApp.AppState>) { }

    getAllSigns() {
        this.store.dispatch(new RoadSignActions.GetAllSignsStart());
        return this.store.select(state => state.roadSigns.allRoadSigns);
    }

    getSignsByCategory(category: string) {
        this.store.dispatch(new RoadSignActions.GetSignsByCategoryStart(category));
        return this.store.select(state => state.roadSigns.signByCategory);
    }

    addSign(roadSign: RoadSign) {
        this.store.dispatch(new RoadSignActions.AddSignStart(roadSign));
        return this.store.select(state => state.roadSigns.newSign);
    }

    editSign(signId: number, sign: RoadSign) {
        this.store.dispatch(new RoadSignActions.EditSignStart(signId, sign));
        return this.store.select(state => state.roadSigns.editSign);
    }

    removeSign(signId: number) {
        this.store.dispatch(new RoadSignActions.RemoveSignStart(signId));
    }

    searchSign(name: string) {
        this.store.dispatch(new RoadSignActions.SearchSignStart(name));
        return this.store.select(state => state.roadSigns.searchSign);
    }

    getSigns() {
       return this.store.select(state => state.roadSigns);
    }

    getPagedSigns(page: number) {
        this.store.dispatch(new RoadSignActions.LoadSigns(page));
    }

    loadEventsbyInserting(page: number) {
        this.store.dispatch(new RoadSignActions.InsertSigns(page));
    }

}
