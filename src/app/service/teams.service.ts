import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  allTeams = [
    {team: ['Wriothesley', 'Furina', 'Kazuha', 'Baizhuer'], name: 'Wriothesley', star: ['fiveStar', 'fiveStar', 'fiveStar', 'fiveStar']},
    {team: ['Neuvillette', 'Furina', 'Kazuha', 'Zhongli'], name: 'Neuvillette', star: ['fiveStar', 'fiveStar', 'fiveStar', 'fiveStar']}, 
    {team: ['Liney', 'Zhongli', 'Kazuha', 'Bennett'], name: 'Lyney', star: ['fiveStar', 'fiveStar', 'fiveStar', 'fourStar']},
    {team: ['Tartaglia', 'Xiangling', 'Kazuha', 'Bennett'], name: 'Tartaglia', star: ['fiveStar', 'fourStar', 'fiveStar', 'fourStar']},
    {team: ['Ayaka', 'Shenhe', 'Kazuha', 'Mona'], name: 'Ayaka', star: ['fiveStar', 'fiveStar', 'fiveStar', 'fiveStar']},
    {team: ['Ayato', 'Yelan', 'Kazuha', 'Bennett'], name: 'Ayato', star: ['fiveStar', 'fiveStar', 'fiveStar', 'fourStar']},
    {team: ['Hutao', 'Xingqiu', 'Yelan', 'Zhongli'], name: 'Hu-tao', star: ['fiveStar', 'fourStar', 'fiveStar', 'fiveStar']},
    {team: ['Alhatham', 'Nahida', 'Xingqiu', 'Shinobu'], name: 'Alhaitham', star: ['fiveStar', 'fiveStar', 'fourStar', 'fourStar']},
    {team: ['Cyno', 'Nahida', 'Yelan', 'Shinobu'], name: 'Cyno', star: ['fiveStar', 'fiveStar', 'fiveStar', 'fourStar']},
    {team: ['Itto', 'Albedo', 'Gorou', 'Zhongli'], name: 'Itto', star: ['fiveStar', 'fiveStar', 'fourStar', 'fiveStar']},
    {team: ['Wanderer', 'Faruzan', 'Zhongli', 'Bennett'], name: 'Wanderer', star: ['fiveStar', 'fourStar', 'fiveStar', 'fourStar']},
    {team: ['Tighnari', 'Yae', 'Furina', 'Baizhuer'], name: 'Tighnari', star: ['fiveStar', 'fiveStar', 'fiveStar', 'fiveStar']},
  ]
}
