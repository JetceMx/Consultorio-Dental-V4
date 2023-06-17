import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { AgendarComponent } from './citas/agendar/agendar.component';
import { RevisarComponent } from './citas/revisar/revisar.component';
import { CitasComponent } from './citas/citas.component';
import { Error404Component } from './error404/error404.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { RegisterComponent } from './cuenta/register/register.component';
import { LoginComponent } from './cuenta/login/login.component';
import { LoginTComponent } from './cuenta/login-t/login-t.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { LoadingComponent } from './loading/loading.component';
import { PreguntasComponent } from './preguntas/preguntas.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'acercaDe', component: AcercaDeComponent },
  { path: 'recomendaciones', component: RecomendacionesComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'citas/agendar', component: AgendarComponent },
  { path: 'citas/revisar', component: RevisarComponent },
  { path: 'Cuenta', component: CuentaComponent },
  { path: 'Cuenta/regisE', component: RegisterComponent },
  { path: 'Cuenta/loginE', component: LoginComponent },
  { path: 'Cuenta/loginE', component: LoginComponent },
  { path: 'Cuenta/loginT', component: LoginTComponent },
  {path:  'busqueda', component: BusquedaComponent},
  { path: 'loading', component:LoadingComponent}, //Ruta para acomodar el loading, espero no olvidar borrarla
  { path: 'preguntas', component: PreguntasComponent },
  { path: '**', component: Error404Component }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
