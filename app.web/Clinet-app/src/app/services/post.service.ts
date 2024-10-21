import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This makes the service available throughout the app
})
export class PostService {
  private apiUrl = 'assets/data/PostJsonData.json'; // Path to your JSON file

  constructor(private http: HttpClient) {} // Inject HttpClient

  // Method to fetch posts
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
