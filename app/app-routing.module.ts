import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { SignUpComponent} from './sign-up/sign-up.component';
import { HomeComponent} from './home/home.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent} from './header/header.component';
import { PaginaprincipalaComponent} from './paginaprincipala/paginaprincipala.component';
import { MakeUpComponent} from './make-up/make-up.component';
import { ManichiuraComponent} from './manichiura/manichiura.component';
import { EpilareComponent} from './epilare/epilare.component';
import { GalerieComponent} from './galerie/galerie.component';
import { CoaforComponent} from './coafor/coafor.component';
import { ContactComponent} from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { PreturiComponent} from './preturi/preturi.component';
import { MesajComponent} from './mesaj/mesaj.component';


const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    component: PaginaprincipalaComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'sign-up',
    component: SignUpComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'header',
    component: HeaderComponent
  },
  {
    path:'paginaprincipala',
    component: PaginaprincipalaComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'make-up',
    component: MakeUpComponent
  },
  {
    path:'manichiura',
    component: ManichiuraComponent
  },
  {
    path:'epilare',
    component: EpilareComponent
  },
  {
    path:'galerie',
    component: GalerieComponent
  },
  {
    path:'coafor',
    component: CoaforComponent
  },
  {
    path:'footer',
    component: FooterComponent
  },
  {
    path:'preturi',
    component: PreturiComponent
  },
  {
    path:'mesaj',
    component: MesajComponent
  },
];

@NgModule({
  imports: [
            CommonModule,
            RouterModule.forRoot(routes)
          ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
