import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { CharactersTemplateComponent } from './templates/characters-template/characters-template.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    CharactersTemplateComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
