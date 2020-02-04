
import {RouterModule, Routes,  } from '@angular/router';
import { AlejandroComponent } from './components/alejandro/alejandro.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { EventoComponent } from './components/evento/evento.component';
import { UserComponent } from './components/user/user.component';

const APP_ROUTES: Routes = [
  { path: 'servicios', component: ServiciosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'alejandro', component: AlejandroComponent },
  { path: 'portafolio', component: PortafolioComponent },
 // { path: 'heroe/:id', component: HeroeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'evento/:id', component: EventoComponent },
  {path: 'user' , component: UserComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
