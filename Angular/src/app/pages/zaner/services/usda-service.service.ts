import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsdaInfo } from '../models/usdainfo.model';

@Injectable({
  providedIn: 'root'
})
export class UsdaServiceService {

  constructor(private http: HttpClient) {}
   
    getAllCategories(): Observable<UsdaInfo> {
      // return this.http.get<UsdaInfo>(`${environment.usdaApiUrl}/api/UsdaInfo`);
      return this.http.get<UsdaInfo>('https://localhost:7281/api/UsdaInfo');

    }
}
