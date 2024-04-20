import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsdaServiceService {

  constructor(private http: HttpClient) {}
   
    getAllCategories(): Observable<UsdaInfo> {
      return this.http.get<UsdaInfo>(`${environment.apiBaseUrl}/api/categories`);
    }
}
