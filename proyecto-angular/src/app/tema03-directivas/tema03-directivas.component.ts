import { Component } from '@angular/core';
import { Sugus } from '../tema02-comunicacion-componentes/sugus/sugus.type';

@Component({
  selector: 'app-tema03-directivas',
  templateUrl: './tema03-directivas.component.html',
  styleUrls: ['./tema03-directivas.component.css']
})
export class Tema03DirectivasComponent {

  aplicarFondoNegro: boolean = true
  aplicarLetraNaranja: boolean = true

  isLoggedIn: boolean = false
  usuario: string = 'Isaac'

  get clases1(){
      return{
        fondoNegro: this.aplicarFondoNegro,
        letraNaranja: this.aplicarLetraNaranja,
      }
  }

  get clases2(){
    return{
    fondoAzul: true,
    letraBlanca: true
    }

  }

  listaSugus: Array<Sugus> = [
  {
    color:'red',
    sabor: 'fresa'
  },
 {
    color:'orange',
    sabor: 'naranja'
  },
  {
    color:'blue',
    sabor: 'piña'
  },
  {
    color:'yellow',
    sabor: 'limón'
  },
]

contactos: Array<string> = [
  'Charly Falco: 666775558',
  'SilKe Apellido: 888553331',
  'Joel Calderón: 6677552223',
]

get contactosFiltrados(){
  return this.contactos.filter( //IMPORTANTE --MUY INTERESANTE
    (item:string) => {
      return !item.includes('Charly')
    }
  )
}

miMascota: string = 'tortuga'
mascotas: Array<string> = [
  'perro',
  'gato',
  'periquito',
  'canario',
]

  login(){
    this.isLoggedIn = true
  }
  logout(){
    this.isLoggedIn = false
  }

}
