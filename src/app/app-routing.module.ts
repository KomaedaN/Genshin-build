import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'character/:character', component: CharactersComponent},
  { path: 'teams', component: TeamsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
