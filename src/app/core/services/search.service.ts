import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private apiService: ApiService) {}

  getAuthorlist(searchText: string): Observable<any> {
    return this.apiService.get(`/search/authors.json?q=${searchText}`);
  }
}