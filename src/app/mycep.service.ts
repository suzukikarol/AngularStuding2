import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class MycepService {

  private apiurl = "https://viacep.com.br/ws/"

  constructor(private http:HttpClient) { }

  getCep(cep){
    let url = this.apiurl + cep + "/json"
    return this.http.get(url)
  }
}
