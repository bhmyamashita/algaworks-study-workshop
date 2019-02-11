import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  apiURL = 'http://localhost:8080/parking';

  constructor(private httpClient:HttpClient) { }

  listAll() {
    return this.httpClient.get(this.apiURL);
  }

  insert(parking: any) {
    return this.httpClient.post(this.apiURL, parking);
  }
}
