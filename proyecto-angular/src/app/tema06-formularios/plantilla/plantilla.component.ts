import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent {

  formData = {
    nombre: '',
    email: '',
    password: ''
  }

  registro(form: NgForm){
    console.log(this.formData)
    console.log(form)
    console.dir(form)
  }

}
