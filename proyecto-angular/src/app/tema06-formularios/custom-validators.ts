import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export default class CustomValidators{
    static passwordSegura(minLenght: number): ValidatorFn{
        return (control : AbstractControl): ValidationErrors | null =>{
            
            if(!new RegExp('[a-z]+').test(control.value)){
                return {letters: true}
            }            
            if(!new RegExp('[a-z]+').test(control.value)){
                return {numbers: true}
            }
            if(!new RegExp('[a-z]+').test(control.value)){
                return {letters: true}
            }
            if(!(control.value.includes('-') || control.value.includes('.'))){
                return {symbols: true}
            }


            
            return null
        }

    }
}