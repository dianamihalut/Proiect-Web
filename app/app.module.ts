import { HotToastModule } from '@ngneat/hot-toast';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HeaderComponent } from './header/header.component';
import { PaginaprincipalaComponent } from './paginaprincipala/paginaprincipala.component';
import { ContactComponent } from './contact/contact.component';
import { MakeUpComponent } from './make-up/make-up.component';
import { CoaforComponent } from './coafor/coafor.component';
import { ManichiuraComponent } from './manichiura/manichiura.component';
import { GalerieComponent } from './galerie/galerie.component';
import { EpilareComponent } from './epilare/epilare.component';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from './footer/footer.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { PreturiComponent } from './preturi/preturi.component';
import { MesajComponent } from './mesaj/mesaj.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule} from '@angular/material/select';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    HeaderComponent,
    PaginaprincipalaComponent,
    ContactComponent,
    MakeUpComponent,
    CoaforComponent,
    ManichiuraComponent,
    GalerieComponent,
    EpilareComponent,
    FooterComponent,
    PreturiComponent,
    MesajComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    HotToastModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
    
  ],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
