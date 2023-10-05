import { Component } from '@angular/core';

type Logo = { //Aqui nos hemos creado nuestro propio tipo de dato
  nombre: string,
  url: string,
}

@Component({
  selector: 'app-tema01-data-binding',
  templateUrl: './tema01-data-binding.component.html',
  styleUrls: ['./tema01-data-binding.component.css']
})
export class Tema01DataBindingComponent {
  //string, number,boolean
  // Array<number>, Array<strin>
  //[]number, []string
  //any
  //undefined, null, void
  nombre: string = 'Isaac'
  apellido: string = 'Calderón'
  logoAngular: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'

  logo : Logo = {
    nombre: 'Angular',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png'
  }

  numClicks: number=0

  constructor(){

  }
  get nombreCompleto(): string{
    return `${this.nombre} ${this.apellido}`
  }

  getNombreCompleto() :string {
    return this.nombre + ' ' + this.apellido 

    return `${this.nombre} ${this.apellido}` //Manera moderna
  }

  changeNumClicks(): void{
    this.numClicks++
    alert(`Se ha pulsado ${this.numClicks} veces`) //Aqui se tiene que poner la ` acento frances
  }

  changeNombre(event: Event): void{
    console.log(event)

    //Ojo Casting -- Te lo dice la consola 
    const target = event.target as HTMLInputElement
    this.nombre = target.value
  }

}
