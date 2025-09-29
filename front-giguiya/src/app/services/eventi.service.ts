import { Injectable, inject} from '@angular/core';
   import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Eventi } from '../../models/eventi';
@Injectable({
  providedIn: 'root'
})
export class EventiService {

  private http = inject(HttpClient);
  private apiUrl = `${environment.apiUrl}/events`;

  createEvent(event: Omit<Eventi, 'id'>) {
    return this.http.post<Eventi>(this.apiUrl, event);
  }
  /*

  getEvents() {
    return this.http.get<Eventi[]>(this.apiUrl);
  }
  updateEvent(event: Eventi) { // Tipo coerente
    return this.http.put(`${this.apiUrl}/${event.id}`, event);
  }

  deleteEvent(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);

  }
    */
}