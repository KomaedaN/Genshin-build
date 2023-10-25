import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { TeamsComponent } from './teams/teams.component';
import { CharactersTemplateComponent } from './templates/characters-template/characters-template.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'characters/:character', component: CharactersComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'characters', component: CharactersTemplateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
