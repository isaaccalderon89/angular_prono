import { Component, Input } from '@angular/core';

type Vendehumo = {
  nombre: string,
  id: string,
  foto: string,
  categoria: string,
  numVotos: number
}

@Component({
  selector: 'app-vendehumo-card',
  templateUrl: './vendehumo-card.component.html',
  styleUrls: ['./vendehumo-card.component.css']
})
export class VendehumoCardComponent {

  @Input() vendehumo : Vendehumo | null = null

   changeNumVoto(): void {
    // this.vendehumo.numVotos++
   }

}
