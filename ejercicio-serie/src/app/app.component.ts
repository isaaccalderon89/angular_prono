import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  generoSeleccionado: string ='cifi';
  
  ultimaSerie: string = 'Jury Duty';
  nCapitulos: number = 8;
  duracion: string = "20 min aprox"
  portadaSerie = 'https://fotografias.lasexta.com/clipping/cmsimages01/2023/08/02/9FFAD33C-0478-4AD1-8199-2AEAE9A8445D/jury-duty-jurado-llega-amazon-prime-video_60.jpg?crop=2048,1152,x0,y0&width=640&height=360&optimize=medium&format=webply';

  masInfo(){
    alert('¡Tenemos un pirata! Avisando a la policía')
  }
}
