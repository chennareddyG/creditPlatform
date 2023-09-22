import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:3000/user';
  roleUrl = 'http://localhost:3000/role';
  constructor(
    private http: HttpClient
  ) { }
  
  getUserList() {
    return this.http.get<any>(this.apiUrl);
  }

  GetUserbyCode(id:any){
    return this.http.get(this.apiUrl+'/'+id);
  }
  createUser(inputData: any) {
    return this.http.post(this.apiUrl, inputData);
  }
  getAll(){
    return this.http.get<any>(this.apiUrl);
  }
  updateUser(code: any, inputData: any) {
    return this.http.put(this.apiUrl+'/'+code, inputData)
  }
  isLoggedIn() {
    return sessionStorage.getItem('userName')!=null;
  }
  getUserbyCode(id:any){
    return this.http.get(this.apiUrl+'/'+id);
  }
  getUserRole() {
    return  sessionStorage.getItem("userRole")!=null?sessionStorage.getItem('userRole')?.toString():'';
  }
  getRoleList() {
    return this.http.get(this.roleUrl)
  }
}
