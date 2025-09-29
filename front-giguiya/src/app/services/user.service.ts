import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../../models/utenti';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/users`;

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }

  createUser(user: Omit<User, 'id'>) {
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
  }
}