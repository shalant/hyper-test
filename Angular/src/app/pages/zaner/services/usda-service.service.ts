import { environment } from '@/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datum, UsdaInfo } from '../models/usdainfo.model';

@Injectable({
  providedIn: 'root'
})

export class UsdaServiceService {

  metric: string = '';
  commodity: string = '';
  year: string = '';
  params = new HttpParams()
    .set('metric', this.metric)
    .set('commodity', this.commodity)
    .set('year', this.year);
    
  options: {} = this.params;

  constructor(private http: HttpClient) {}
   
    // getAllUsdaDataNoParams(): Observable<Datum[]> {
    //   // return this.http.get<UsdaInfo>(`${environment.usdaApiUrl}/api/UsdaInfo`);
    //   return this.http.get<Datum[]>('https://localhost:7281/getnoparams');

    // }

    // loadDataWithParams(metric: string, commodity: string, year: string): Observable<Datum[]> {
    //   // return this.http.get<Datum[]>('https://localhost:7281/api/UsdaInfo', this.options);
    //   return this.http.get<Datum[]>('https://localhost:7281/api/UsdaInfo?Metric=AREA%20PLANTED&Commodity=CORN&Year=2024');

    // }
}
