import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MemberTO} from '../models/MemberTO';



@Injectable({
  providedIn: 'root'
})
export class MemberService {
  memberUrl = environment.memberUrl;

  constructor(private httpClient: HttpClient) {
  }

  public list(): Observable<MemberTO[]> {
    return this.httpClient.get<MemberTO[]>(this.memberUrl);
  }
}
