import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './region';


@Injectable({
  providedIn: 'root'
})
export class RegionService {


    private apiURL = 'https://electronkw.net/new_laravel_API/api/regions'; // Change this to your API URL
  
    constructor(private http: HttpClient) { }
  
    // Create a new item
    createItem(item: Item): Observable<Item> {
      return this.http.post<Item>(`${this.apiURL}`, item);
    }
  
    // Get all items
    getItems(): Observable<Item[]> {
      return this.http.get<Item[]>(`${this.apiURL}`);
    }
  
    // Get a single item by id
    getItem(id: number): Observable<Item> {
      return this.http.get<Item>(`${this.apiURL}/${id}`);
    }
  
    // Update an item by id
    updateItem(id: number, item: Item): Observable<Item> {
      return this.http.put<Item>(`${this.apiURL}/${id}`, item);
    }
  
    // Delete an item by id
    deleteItem(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiURL}/${id}`);
    }
  }
  

