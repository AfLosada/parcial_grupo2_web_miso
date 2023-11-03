import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { plantUrl } from 'src/environments/environment'
import { Plant } from '../plant'

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  private apiUrl: string = plantUrl

  constructor(private http: HttpClient) {}

  getPlants() {
    return this.http.get<Plant[]>(this.apiUrl)
  }
}
