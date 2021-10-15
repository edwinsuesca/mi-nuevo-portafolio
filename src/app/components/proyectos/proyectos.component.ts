import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ocultar(event: any): void{
    alert(event.target);
  }
}
