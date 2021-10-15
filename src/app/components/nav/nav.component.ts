import { Component, ElementRef, Renderer2, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit{

  rutas=[
    {nombre: 'Inicio', routerLink: '/inicio', clase: 'aNav'},
    {nombre: 'Proyectos', routerLink: '/proyectos', clase: 'aNav'}
  ]

  constructor() {}

  @ViewChild('menu') public menu!:ElementRef;
  @ViewChild('burgerBox') public burgerBox!:ElementRef;

  //Rectángulos que conforman el ícono del menú hamburguesa.
  @ViewChild('rect1') public rect1!:ElementRef;
  @ViewChild('rect2') public rect2!:ElementRef;
  @ViewChild('rect3') public rect3!:ElementRef;

  estadoMenu = false; //Establece el estado del menú en falso (oculto).

  ngAfterViewInit(): void{
//Oculta el menú cuando se da clic en una de las opciones con clase "aNav".
    this.burgerBox.nativeElement.addEventListener('click', ()=>{
      switch(this.estadoMenu){
        case false:
          this.menu.nativeElement.style.left = "0"; //Muestra el menú.
          this.rect1.nativeElement.style.transform = "translateY(11px) rotate(-45deg)"; //Rota rectángulo sup.
          this.rect3.nativeElement.style.transform = "translateY(-11px) rotate(45deg)"; //Rota rectángulo inf.
          this.rect2.nativeElement.style.width = "0"; // Oculta rectángulo del medio.
          this.estadoMenu = true;
        break;

        case true:
          this.menu.nativeElement.style.left = "-200px"; //Oculta el menú.
          this.rect1.nativeElement.style.transform = "translateY(0) rotate(0)";
          this.rect3.nativeElement.style.transform = "translateY(0) rotate(0)";
          this.rect2.nativeElement.style.width = "100%";
          this.estadoMenu = false;
        break;
      }
    })
  };
//Oculta el menú cuando se da clic en una de las opciones con clase "aNav".
  ocultar(event:any): void{
    if(event.target.className == 'aNav'){
      this.menu.nativeElement.style.left = "-200px"; //Oculta el menú.
      this.rect1.nativeElement.style.transform = "translateY(0) rotate(0)";
      this.rect3.nativeElement.style.transform = "translateY(0) rotate(0)";
      this.rect2.nativeElement.style.width = "100%";
      this.estadoMenu = false
    }
  }
}