import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private odataUrl = 'https://services.odata.org/V4/Northwind/Northwind.svc/';

  constructor(private http: HttpClient) { }

  getODataXmlData() {
    return this.http.get(this.odataUrl);
  }
}
