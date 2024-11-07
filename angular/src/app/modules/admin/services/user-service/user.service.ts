import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public language: any = localStorage.getItem('languaje') || 'es';

  constructor(private http: HttpClient) { }

  grantPermissions(userId: number, permissions: string[]): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    const body = {
      userId,
      permissions
    };
    const url = `http://localhost:8083/api/v1/users/permissions/assignPermissions`;

    return this.http.post(url + `?_locale=${this.language}`, body, { headers });

  }
  searchUsers(query: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });
  
    const url = `http://localhost:8083/api/v1/users/search`; 
  
    return this.http.get<any[]>(`${url}?query=${query}`, { headers }); 
  }
  
}
