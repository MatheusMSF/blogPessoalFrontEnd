import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken(){
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  entrar(UserLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blogpessoalmatheussantos.herokuapp.com/usuarios/logar', UserLogin)
  }

  cadastrar(User:User): Observable<User>{
    return this.http.post<User>('https://blogpessoalmatheussantos.herokuapp.com/usuarios/cadastrar', User)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://blogpessoalmatheussantos.herokuapp.com/usuarios/${id}`, this.token)
  }


  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

}