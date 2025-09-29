import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventiComponent } from './components/eventi/eventi.component';
import { UtentiComponent } from './components/utenti/utenti.component';
import { ChiSiamoComponent } from './components/chi-siamo/chi-siamo.component';
import { ContattiComponent } from './shareFootetElements/contatti/contatti.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { BadegnaComponent } from './components/progetti/badegna/badegna.component';
import { SportComponent } from './components/progetti/sport/sport.component';
import { MosaicoComponent } from './components/partner/mosaico/mosaico.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { LoginComponent } from './components/auth/login/login.component';





export const routes: Routes = [
{path:"", component: HomeComponent},
{path:"chiSiamo", component: ChiSiamoComponent},
{path:"eventi", component: EventiComponent},
{path:"utenti", component: UtentiComponent},
{path:"contatti", component: ContattiComponent},
{path:"mosaico", component:MosaicoComponent},
{path:"login", component: LoginComponent},
{path:"badegna", component:BadegnaComponent},
{path:"sport", component:SportComponent},
{path:"dashboard", component: DashboardComponent , canActivate: [authGuard]},
{path:"**", component:NotFoundComponent}



]
