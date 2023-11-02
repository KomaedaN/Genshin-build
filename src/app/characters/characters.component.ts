import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  constructor(private route: ActivatedRoute) { }
  
  imgName = '';
  validName = '';
  currentCharacter = '';
  currentData = {name: '', weapons: [['']], artifact: '', mainstats: [''], substats: [''], skills: [''], ascensions: [''], talents: ['']};
  allCharactersData = [
    {name:'Albedo',weapons:[['Sword_Opus','four'],['Sword_Dawn','rare'],['Sword_Boreas','four'],['Sword_Morax','five']],artifact:'15032',
    mainstats:['DEF%','Geo DMG','TC / DC / DEF%'],substats:['TC','DC','DEF%','ATK%'],skills:['Skill','Burst','AA'],
    ascensions:['Effigy_Rock','113009','100023','112008','112009','112010'],talents:['Tartaglia','113013','104307','104308','104309']},
    {name:'Alhaitham',weapons:[['Sword_Ayus','five'],['Sword_Morax','five'],['Sword_Amenoma','five'],['Sword_Boreas','four']],artifact:'15026',
    mainstats:['EM / ATK%','Dendro DMG','TC / DC'],substats:['TC','DC','EM','ER'],skills:['Skill','Burst','AA'],
    ascensions:['Sandworm','113044','101222','112065','112066','112067'],talents:['Nada','113042','104332','104333','104334']},
    {name:'Ayaka',weapons:[['Sword_Narukami','five'],['Sword_Amenoma','five'],['Sword_Ayus','five'],['Sword_Vorpal','four']],artifact:'14001',
    mainstats:['ATK%','Cryo DMG','DC'],substats:['DC','ATK%','ER','TC'],skills:['Burst','AA','Skill'],
    ascensions:['Samurai_Ningyo','113023','101202','112044','112045','112046'],talents:['Dahaka','113018','104323','104324','104325']},

    {name:'Charlotte',weapons:[['Catalyst_Dvalin','five'],['Catalyst_Proto','four'],['Catalyst_Zephyrus','four'],['Catalyst_Pulpfic','rare']],artifact:'15017',
    mainstats:['ER','ATK%','ATK%'],substats:['ER','ATK%','TC','DC'],skills:['Burst','Skill','AA'],
    ascensions:['MachinaIustitia_Gravitas','113052','101232','112083','112084','112085'],talents:['Ptahur_Devourer','113047','104341','104342','104343']},

    {name:'Furina',weapons:[['Sword_Regalis','five'],['Sword_Ayus','five'],['Sword_Boreas','four'],['Sword_Deshret','five']],artifact:'15032',
    mainstats:['ER = HP%','HP% > Hydro DMG','TC/DC'],substats:['TC','DC','ER','HP%'],skills:['Burst','Skill','AA'],
    ascensions:['Narcissusborn_Normal_01','113057','101238','112038','112039','112040'],talents:['Ptahur_Devourer','113047','104341','104342','104343']},

    {name:'Hutao',weapons:[['Pole_Homa','five'],['Pole_Deshret','five'],['Pole_Shanty','four'],['Pole_Stardust','four']],artifact:'15006',
    mainstats:['HP% / EM','Pyro DMG','TC / DC'],substats:['TC','DC','EM','ATK%'],skills:['AA','Skill','Burst'],
    ascensions:['Drake_Primo_Rock','113016','100029','112038','112039','112040'],talents:['Tartaglia','113014','104313','104314','104315']},

    {name:'Tartaglia',weapons:[['Bow_Worldbane','five'],['Bow_Kirin','five'],['Bow_Narukami','five'],['Bow_Ayus','five']],artifact:'15029',
    mainstats:['ATK%','Hydro DMG','TC / DC'],substats:['TC','DC','ATK%','EM'],skills:['Skill','Burst','AA'],
    ascensions:['Oceanid','113012','100033','112032','112033','112034'],talents:['Tartaglia','113014','104301','104302','104303']},

    {name:'Tighnari',weapons:[['Bow_Ayus','five'],['Bow_Kirin','five'],['Bow_Pledge','five'],['Bow_Dvalin','five']],artifact:'15026',
    mainstats:['EM / ATK%','Dendro DMG','TC / DC'],substats:['TC','DC','EM','ATK%'],skills:['AA','Burst','Skill'],
    ascensions:['Fungus_Raptor','113036','101215','112059','112060','112061'],talents:['Nada','113034','104329','104330','104331']},
    {name:'Wriothesley',weapons:[['Catalyst_Wheatley','five'],['Catalyst_Alaya','five'],['Catalyst_Iudex','five'],['Catalyst_Narukami','five']],artifact:'15031',
    mainstats:['ATK%','Cryo DMG','DC'],substats:['DC','TC','ATK%','ER'],skills:['AA','Skill','Burst'],
    ascensions:['MachinaIustitia_Gravitas','113052','101239','112083','112084','112085'],talents:['Apep','113047','104344','104345','104346']},

    {name:'Xiangling',weapons:[['Pole_Deshret','five'],['Pole_Homa','five'],['Pole_Narukami','five'],['Pole_Mori','four']],artifact:'15020',
    mainstats:['ER > ATK% / EM','Pyro DMG','TC / DC'],substats:['ER','TC','DC','ATK%'],skills:['Burst','Skill','AA'],
    ascensions:['Regisvine_Fire','113011','100027','112002','112003','112004'],talents:['Dvalin','113004','104313','104314','104315']},
  ]
  ngOnInit(): void {
    this.getCurrentCharacter();
  }

  getCurrentCharacter() {
    this.route.params.subscribe(data => {
      this.currentCharacter = data.character;
      this.imgName = data.character;
    })
    this.verifyName();
    this.getDataFromCharacter();
    
  }
  getDataFromCharacter() {
    for (const element of this.allCharactersData){
      if(element.name == this.currentCharacter) {
        this.currentData = element;
      }
    }
    if (this.currentData.name == '') {
      window.location.href='#/characters';
    }
  }

  verifyName() {
    if (this.currentCharacter == 'Itto') {
      this.currentCharacter = 'Arataki-itto';
    }
    else if (this.currentCharacter == 'Heizo') {
      this.currentCharacter = 'Shikanoin-heizou';
    }
    else if (this.currentCharacter == 'Shougun') {
      this.currentCharacter = 'Raiden';
    }
    else if (this.currentCharacter == 'Yae') {
      this.currentCharacter = 'Yae-miko';
    }
    else if (this.currentCharacter == 'Shinobu') {
      this.currentCharacter = 'Kuki-shinobu';
    }
    else if (this.currentCharacter == 'Baizhuer') {
      this.currentCharacter = 'Baizhu';
    }
    else if (this.currentCharacter == 'Alhatham') {
      this.currentCharacter = 'Alhaitham';
    }
    else if (this.currentCharacter == 'Liney') {
      this.currentCharacter = 'Lyney';
    }
    else {
      const upperName = this.currentCharacter.charAt(0).toUpperCase() + this.currentCharacter.slice(1);
      const validName = upperName.replace("-", "");
      this.validName = validName;
    }
  }
}
