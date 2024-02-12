import { Component } from '@angular/core';
import { TeamsService } from '../service/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  constructor(private teamService: TeamsService) {}

  teams = this.teamService.allTeams
  
}
