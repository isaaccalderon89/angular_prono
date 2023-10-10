import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly usuario = {
    username: 'cfalco',
    password: '1234',
    nombre: 'Charles Falco'
  }

  userLoggedin$ = new EventEmitter<string | null>()

  constructor() { }

  login(username: string, password: string){
    if(username === this.usuario.username && password === this.usuario.password){
      localStorage.setItem('user', this.usuario.nombre)
      this.userLoggedin$.emit(this.usuario.nombre)
    }
  }

  logout(){
    localStorage.removeItem('user')
    this.userLoggedin$.emit(null)
  }

  getIsLoggedin(){
    const value = localStorage.getItem('user')
      return value
  }
}
