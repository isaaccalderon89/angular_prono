import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective {

  @HostBinding('style.background-color') colorFondo: string = ''
  // @HostBinding('class.nombreClase') colorFondo: boolean = ''
  // @HostBinding('attr') colorFondo: string = ''

  @Input('appBlink') color: string = 'yellow'
  defaultColor: string = 'white'

  intervalId: any | null = null

  constructor() { 

  }

  ngOnInit(){
    this.colorFondo = this.color
  }

  @HostListener('mouseover') onMouseOver(){ //Detecta eventos en la etiqueta
    this.intervalId =setInterval(() =>{
      this.colorFondo= this.colorFondo === this.defaultColor ? this.color : this.defaultColor
    }, 800)

}

  @HostListener('mouseleave') onMouseLeave(){
    clearInterval(this.intervalId)
    this.colorFondo = this.defaultColor
  }

            /*
                  CICLO DE VIDA
            
                  -> Contructor()
                  -> Iniciliza los @Inputs()
                  -> ngOnInit() solo se ejecuta una vez al crear el componente
                  -> ngAfterViewInit
                  -> ngOnChanges se puede ejecutar varias veces
                  -> ngOnDestroy
            */
}