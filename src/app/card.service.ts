import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  listUrl = 'http://localhost:3000/creditCards';
  newCardUrl = 'http://localhost:3000/newCards';

  constructor(
    private http: HttpClient
  ) { }

  getCardList() {
    return this.http.get<any>(this.listUrl);
  }
  getUsers(input: any) {
    return this.http.get(this.newCardUrl + '/' + input);
  }
  getAppliedCards(){
    return this.http.get(this.newCardUrl);
  }
  registerCard(inputData: any) {
    return this.http.post(this.newCardUrl, inputData);
  }
  updateCardStatus(code: any, inputData: any) {
    return this.http.put(this.newCardUrl+'/'+code, inputData)
  }
}
