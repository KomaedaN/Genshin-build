import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters-template',
  templateUrl: './characters-template.component.html',
  styleUrls: ['./characters-template.component.scss']
})
export class CharactersTemplateComponent {
  public name: string = '';
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    
  }

  allChara = [
    {name: "Albedo", vision: "Geo", icon: "Albedo"}, {name: "Alhaitham", vision: "Dendro", icon: "Alhatham"}, 
    {name: "Ayaka", vision: "Cryo", icon: "Ayaka"}, {name: "Ayato", vision: "Hydro", icon: "Ayato"}, {name: "Baizhu", vision: "Dendro", icon: "Baizhuer"}, 
    {name: "Bennett", vision: "Pyro", icon: "Bennett"}, {name: "Charlotte", vision: "Cryo", icon: "Charlotte"}, 
    {name: "Cyno", vision: "Electro", icon: "Cyno"}, {name: "Eula", vision: "Cryo", icon: "Eula"},
    {name: "Faruzan", vision: "Anemo", icon: "Faruzan"}, {name: "Fischl", vision: "Electro", icon: "Fischl"}, {name: "Furina", vision: "Hydro", icon: "Furina"},
    {name: "Ganyu", vision: "Cryo", icon: "Ganyu"},
    {name: "Gorou", vision: "Geo", icon: "Gorou"}, {name: "Heizou", vision: "Anemo", icon: "Heizo"},
    {name: "Hu-tao", vision: "Pyro", icon: "Hutao"}, {name: "Itto", vision: "Geo", icon: "Itto"}, {name: "Kazuha", vision: "Anemo", icon: "Kazuha"},
    {name: "Kokomi", vision: "Hydro", icon: "Kokomi"}, {name: "Shinobu", vision: "Electro", icon: "Shinobu"}, {name: "Lyney", vision: "Pyro", icon: "Liney"},
    {name: "Mona", vision: "Hydro", icon: "Mona"},
    {name: "Nahida", vision: "Dendro", icon: "Nahida"}, {name: "Neuvillette", vision: "Hydro", icon: "Neuvillette"}, {name: "Nilou", vision: "Hydro", icon: "Nilou"},
    {name: "Raiden", vision: "Electro", icon: "Shougun"}, 
    {name: "Shenhe", vision: "Cryo", icon: "Shenhe"}, 
    {name: "Tartaglia", vision: "Hydro", icon: "Tartaglia"}, {name: "Tighnari", vision: "Dendro", icon: "Tighnari"}, {name: "Venti", vision: "Anemo", icon: "Venti"},
    {name: "Wanderer", vision: "Anemo", icon: "Wanderer"}, {name: "Wriothesley", vision: "Cryo", icon: "Wriothesley"}, {name: "Xiangling", vision: "Pyro", icon: "Xiangling"}, 
    {name: "Xiao", vision: "Anemo", icon: "Xiao"}, {name: "Xingqiu", vision: "Hydro", icon: "Xingqiu"},
    {name: "Yae-miko", vision: "Electro", icon: "Yae"}, {name: "Yelan", vision: "Hydro", icon: "Yelan"}, {name: "Yoimiya", vision: "Pyro", icon: "Yoimiya"},
    {name: "Yun-jin", vision: "Geo", icon: "Yunjin"}, {name: "Zhongli", vision: "Geo", icon: "Zhongli"},
  ]

  displayAll = true;
  visions: { [key: string]: boolean } = {
    Hydro: false,
    Cryo: false,
    Electro: false,
    Pyro: false,
    Anemo: false,
    Geo: false,
    Dendro: false,
  };

  cardUrl = 'https://api.ambr.top/assets/UI/namecard/UI_NameCardPic_';

  displayElement(visionType: string) {
    this.displayAll = false;
    this.visions[visionType] = !this.visions[visionType];
    this.displayAllElements();
    const id = document.getElementById(visionType + "_btn");
    if (this.visions[visionType] === true) {
      id?.classList.add(visionType);
    } else if (this.visions[visionType] === false) {
      id?.classList.remove(visionType);
    };
  }

  

  displayAllElements() {
    if (!this.visions["Hydro"] && !this.visions["Cryo"] && !this.visions["Pyro"] && !this.visions["Anemo"] && !this.visions["Electro"] && !this.visions["Dendro"] && !this.visions["Geo"]){
      this.displayAll = true;
    }
  }
}
