import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'proyectos', component: ProyectosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
