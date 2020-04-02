import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { EditorialComponent } from './editorial/editorial.component';
import { MoulageComponent } from './moulage/moulage.component';
import { ProtheseComponent } from './prothese/prothese.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ParcoursComponent } from './parcours/parcours.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    EditorialComponent,
    MoulageComponent,
    ProtheseComponent,
    PresentationComponent,
    ParcoursComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
