import { Injectable } from '@angular/core';
import * as RoadSignsActions from '../actions/roadSign.actions';
import { ofType, Actions, createEffect } from '@ngrx/effects';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { RoadsignService } from '../../../layout/services/roadsign.service';

@Injectable()

export class RoadSignEffects {
    getAllRoadSigns$ = createEffect(() => this.actions$.pipe(
        ofType(RoadSignsActions.GET_ALL_ROAD_SIGNS_START),
        switchMap((action: RoadSignsActions.GetAllSignsStart) => {
            return this.roadSignService.getAllSignsFromDataSet().pipe(
                map((roadSigns) => new RoadSignsActions.GetAllSignsSuccess(roadSigns)),
                catchError((error: string) => of(new RoadSignsActions.GetAllSignsFailed(error)))
            );
        }))
    );

    getRoadSignsByCategory$ = createEffect(() => this.actions$.pipe(
        ofType(RoadSignsActions.GET_BY_CATEGORY_START),
        switchMap((action: RoadSignsActions.GetSignsByCategoryStart) => {
            return this.roadSignService.getSignsByCategory(action.category).pipe(
                map((roadSigns) => new RoadSignsActions.GetSignsByCategorySuccess(roadSigns)),
                catchError((error: string) => of(new RoadSignsActions.GetSignsByCategoryFailed(error)))
            );
        }))
    );

    addSign$ = createEffect(() => this.actions$.pipe(
        ofType(RoadSignsActions.ADD_SIGN_START),
        switchMap((action: RoadSignsActions.AddSignStart) => {
            return this.roadSignService.addSignToDataSet(action.payload).pipe(
                mergeMap(() => {
                    return [new RoadSignsActions.AddSignSuccess(),
                    new RoadSignsActions.LoadSigns(1)];
                }),
                catchError((error: string) => of(new RoadSignsActions.AddSignFailed(error)))
            );
        })
    ));

    editSign$ = createEffect(() => this.actions$.pipe(
        ofType(RoadSignsActions.EDIT_SIGN_START),
        switchMap((action: RoadSignsActions.EditSignStart) => {
            return this.roadSignService.editSignFromDataSet(action.editSign).pipe(
                mergeMap(() => {
                    return [new RoadSignsActions.EditSignSuccess(),
                    new RoadSignsActions.LoadSigns(1)];
                }),
                catchError((error: string) => of(new RoadSignsActions.EditSignFailed(error)))
            );
        })
    ));

    deleteSign$ = createEffect(() => this.actions$.pipe(
        ofType(RoadSignsActions.REMOVE_SIGN_START),
        switchMap((action: RoadSignsActions.RemoveSignStart) => {
            return this.roadSignService.deleteSignFromDataSet(action.signId).pipe(
                mergeMap(() => {
                    return [new RoadSignsActions.RemoveSignSuccess(),
                    new RoadSignsActions.LoadSigns(1)];
                }),
                catchError((error: string) => of(new RoadSignsActions.RemoveSignFailed(error)))
            );
        })
    ));

    searchSign$ = createEffect(() => this.actions$.pipe(
        ofType(RoadSignsActions.SEARCH_SIGN_START),
        switchMap((action: RoadSignsActions.SearchSignStart) => {
            return this.roadSignService.searchRoadSigns(action.name).pipe(
                map((roadSigns) => new RoadSignsActions.SearchSignSuccess(roadSigns)),
                catchError((error: string) => of(new RoadSignsActions.SearchSignFailed(error)))
            );
        }))
    );

    loadSigns$ = createEffect(() => this.actions$
      .pipe(
        ofType(RoadSignsActions.LOAD_SIGNS),
        switchMap((action:RoadSignsActions.LoadSigns) => {
          return this.roadSignService.getPagedRoadSigns(action.page)
            .pipe(
              map(roadSign => new RoadSignsActions.LoadSignsSuccess(roadSign)),
              catchError(error => of(new RoadSignsActions.LoadSignsFailed(error)))
            );
        })
      ));

      InsertSigns$ = createEffect(()=> this.actions$.pipe(
        ofType(RoadSignsActions.INSERT_SIGNS),
        switchMap((action:RoadSignsActions.InsertSigns) => {
          return this.roadSignService.getPagedRoadSigns(action.page)
            .pipe(
              map( roadSign => new RoadSignsActions.InsertSignsSuccess(roadSign, action.page)),
              catchError(error => {
                return of(new RoadSignsActions.InsertSignsFailed(error));
              })
            );
        })
      ));
        
    constructor(
        private actions$: Actions,
        private roadSignService: RoadsignService
    ) { }
}
