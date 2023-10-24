import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {


  teams = [
    {team: ['Neuvillette', 'Furina', 'Kazuha', 'Zhongli'], name: 'NeuviCarry', star: ['fiveStar', 'fiveStar', 'fiveStar', 'fiveStar']}, 
    {team: ['Liney', 'Zhongli', 'Kazuha', 'Bennett'], name: 'Lyney', star: ['fiveStar', 'fiveStar', 'fiveStar', 'fourStar']},
    {team: ['Tartaglia', 'Xiangling', 'Kazuha', 'Bennett'], name: 'International', star: ['fiveStar', 'fourStar', 'fiveStar', 'fourStar']}
  ]
          

}
