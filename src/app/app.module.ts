import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { RecomendacionesComponent } from './recomendaciones/recomendaciones.component';
import { AgendarComponent } from './citas/agendar/agendar.component';
import { RevisarComponent } from './citas/revisar/revisar.component';
import { CitasComponent } from './citas/citas.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { RecoComponent } from './reco/reco.component';
import { AlertifyService } from './alertify.service';
import { VideoSeguroPipe } from './inicio/video-seguro.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import { FiltroPipe } from './filtro.pipe';
import { Error404Component } from './error404/error404.component';
import { PadreComponent } from './inicio/padre/padre.component';
import { HijoComponent } from './inicio/hijo/hijo.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './cuenta/login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './cuenta/register/register.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { CuentaComponent } from './cuenta/cuenta.component';
import { LoginTComponent } from './cuenta/login-t/login-t.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { LoadingComponent } from './loading/loading.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ServiceWorkerModule } from '@angular/service-worker';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ContactanosComponent,
    AcercaDeComponent,
    RecomendacionesComponent,
    AgendarComponent,
    RevisarComponent,
    CitasComponent,
    FooterComponent,
    RecoComponent,
    VideoSeguroPipe,
    FiltroPipe,
    Error404Component,
    PadreComponent,
    HijoComponent, LoginComponent, MainComponent, RegisterComponent, CuentaComponent, LoginTComponent, BusquedaComponent, LoadingComponent, PreguntasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatExpansionModule,
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [DatePipe, AlertifyService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
