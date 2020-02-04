import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//servicios
import { AlejandroService } from './services/alejandro.services';
import { blogService} from './services/blog.services';
import { ContactoService } from './services/contact.services';


//rutas
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AlejandroComponent } from './components/alejandro/alejandro.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { BlogComponent } from './components/blog/blog.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EventoComponent } from './components/evento/evento.component';
import { UserComponent } from './components/user/user.component';


import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlejandroComponent,
    ServiciosComponent,
    BlogComponent,
    PortafolioComponent,
    ContactoComponent,
    InicioComponent,
    EventoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AlejandroService,
    blogService,
    ContactoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
