import { Component } from '@angular/core';
import { LogService } from './services/log.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-tema07-servicios',
  templateUrl: './tema07-servicios.component.html',
  styleUrls: ['./tema07-servicios.component.css']
})
export class Tema07ServiciosComponent {
  userLoggedin: string | null = null
  constructor(
    private logService: LogService,
    private authService: AuthService
    ){//se usa para el ciclo de vida e inyección de dependencias
    
  }

  ngOnInt(){
    this.authService.userLoggedin$.subscribe((userLoggedin: string | null) =>{
      this.userLoggedin = userLoggedin
    })
    this.userLoggedin = this.authService.getIsLoggedin()
  }

  mostrarMensajeInfo(inputMsg: HTMLInputElement){
    this.logService.info(inputMsg.value)
  }

  mostrarMensajeError(inputMsg: HTMLInputElement){
    this.logService.error(inputMsg.value)
  }
  
  logout(){
    this.authService.logout()

  }
}
