import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cargo } from '../model/cargo';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private baseURL = "http://localhost:8080/cargos";

  constructor(private httpClient: HttpClient) { }

  createCargo(cargo: Cargo): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, cargo);
  }

  getCargoList(): Observable<Cargo[]>{
    return this.httpClient.get<Cargo[]>(`${this.baseURL}`);
  }

  getCargoById(id: number): Observable<Cargo>{
    return this.httpClient.get<Cargo>(`${this.baseURL}/${id}`);
  }

  updateCargo(id: number, cargo: Cargo): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, cargo);
  }

  deleteCargo(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
