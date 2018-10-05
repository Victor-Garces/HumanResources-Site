import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Competition } from '../models/competition';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient) { }

  createCompetition(competition: Competition) {
    return this.http.post(`${environment.apiBaseUrl}/competition`, competition).toPromise();
  }
}
