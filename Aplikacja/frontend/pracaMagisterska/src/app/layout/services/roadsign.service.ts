import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoadSign } from '../models/roadsign.model';
@Injectable({
  providedIn: 'root'
})
export class RoadsignService {
  readonly ApiUrl = " http://127.0.0.1:8000/";
  readonly PhotoUrl = "http://127.0.0.1:8000/dataset/";

  constructor(private http: HttpClient) { }

  addSignToDataSet(sign: RoadSign) {
    return this.http.post<RoadSign>(this.ApiUrl + 'roadSign/', sign);
  }

  editSignFromDataSet(sign: RoadSign) {
    return this.http.put<RoadSign>(this.ApiUrl + 'roadSign/' + sign.RoadSignId, sign);
  }

  getAllSignsFromDataSet(): Observable<RoadSign[]> {
    return this.http.get<RoadSign[]>(this.ApiUrl + 'roadSign');
  }

  deleteSignFromDataSet(id: number) {
    return this.http.delete<RoadSign>(this.ApiUrl + 'roadSign/' + id)
  }

  UploadPhoto(val: any) {
    return this.http.post(this.ApiUrl + 'SaveFile', val)
  }

  getSignsByCategory(category: string):Observable<RoadSign[]> {
    return this.http.get<RoadSign[]>(this.ApiUrl + 'roadSign/category/?RoadSignCategory='+category);
  }

}
