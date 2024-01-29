import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor() { }
  
  allCharacters = [
    { hydro: [ 'neuvillette', 'tartaglia', 'yelan', 'kokomi', 'nilou', 'mona', 'xingqiu'], lengthCharacters: 7},
    { pyro: ['gaming', 'hu-tao', 'lyney','xiangling', 'bennett', 'yoimiya', 'chevreuse'], lengthCharacters: 7},
    { geo: ['navia', 'arataki-itto', 'zhongli', 'albedo', 'gorou', 'yun-jin'], lengthCharacters: 6},
    { anemo: ['liuyun', 'kazuha', 'xiao', 'venti', 'shikanoin-heizou', 'faruzan'], lengthCharacters: 6},
    { cryo: ['wriothesley', 'ayaka', 'eula', 'shenhe', 'ganyu'], lengthCharacters: 5},
    { electro: ['yae-miko', 'cyno', 'raiden', 'fischl', 'kuki-shinobu'], lengthCharacters: 5},
    { dendro: ['alhaitham', 'baizhu', 'nahida', 'tighnari','kaveh'], lengthCharacters: 5},
  ];
}
