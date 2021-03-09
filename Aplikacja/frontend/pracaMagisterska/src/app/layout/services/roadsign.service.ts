import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoadSign } from '../models/roadsign.model';
@Injectable({
  providedIn: 'root'
})
export class RoadsignService {
  readonly ApiUrl = " http://127.0.0.1:8000/";
  readonly PhotoUrl = " http://127.0.0.1:8000/dataset/";
  constructor(private http: HttpClient) { }

  addSignToDataSet() {

  }

  editSignFromDataSet() {

  }

  getAllSignsFromDataSet(): Observable<RoadSign[]> {
    return this.http.get<RoadSign[]>(this.ApiUrl + 'roadSign');
  }

  deleteSignFromDataSet() {

  }
}
