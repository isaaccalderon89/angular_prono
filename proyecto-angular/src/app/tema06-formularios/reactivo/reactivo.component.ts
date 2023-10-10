import { Component } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent {

  form: FormGroup

  constructor(){
    this.form = this.initializeForm()
  }

  private initializeForm(){
    return new FormGroup({
      nombre: new FormControl('Isaac',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(7)]),
    })
  }
  
  registro(){
    console.log(this.form)
  }
}

// -> Validaciones que no necesitan datos extras: required, email
// -> Validaciones que necesitan datos extras: minLenght(7), max(100)
