import { Component } from '@angular/core';

type Vendehumo = {
  nombre: string,
  id: string,
  foto: string,
  categoria: string,
  numVotos: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-vendehumos';

  listaVendeHumos: Array<Vendehumo> = [
    {
    nombre: "Curso Amadeo LLados",
    id: 'AA1103',
    foto: 'https://heraldodemexico.com.mx/u/fotografias/m/2023/2/10/f1280x720-670812_802487_5050.jpg',
    categoria: 'education',
    numVotos: 0
    },
    {
      nombre: "Estructura Piramidal",
      id: 'AA1104',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Esquema_Piramidal.svg',
      categoria: 'negocio',
      numVotos: 0
    },
    {
      nombre: "Crypto",
      id: 'AA1105',
      foto: 'https://akm-img-a-in.tosshub.com/businesstoday/images/story/202302/what_is_the_difference_between_blockchain_and_bitcoin-sixteen_nine.png?size=948:533',
      categoria: 'negocio',
      numVotos: 0
    }
  ]

  categoriaSeleccionada: string | null = null

  votarVendehumo(vendehumoId: string){
    //[1,2,3,4,2].filter(num => num ===2)=> [2,2]
    //[1,2,3,4,2].find(num => num ===2)=> 2
    //[1,2,3,4,2].map(num => num * 2)=> [2,4,6,2]
    this.listaVendeHumos.map((vendehumo: Vendehumo) =>{
      if(vendehumo.id === vendehumoId){
        return{
          ... vendehumo,
          numVotos: vendehumo.numVotos + 1
        }
      }
      return vendehumo
    })
  }

}
