import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  constructor(private route: ActivatedRoute) { }
  
  validName = '';
  currentCharacter = '';
  currentData = {name: '', weapons: [''], artifact: ''};
  allCharactersData = [
    {name: 'Furina', weapons: ['Sword_Ayus', 'Sword_Regalis', 'Sword_Boreas', 'Sword_Deshret'], artifact: '15032'},
    {name: 'Neuvillette', weapons: ['Catalyst_Iudex', 'Sacrificial Jade', 'Prototype Amber', "Jadefall's Splendor"], artifact: '15031'}
  ]
  ngOnInit(): void {
    this.getCurrentCharacter();
  }

  getCurrentCharacter() {
    this.route.params.subscribe(data => {
      this.currentCharacter = data.character;
    })
    this.getDataFromCharacter();
    this.verifyName();
  }
  getDataFromCharacter() {
    for (const element of this.allCharactersData){
      if(element.name == this.currentCharacter) {
        this.currentData = element;
      }
    }
  }

  verifyName() {
    if (this.currentCharacter == 'arataki-itto') {
      this.currentCharacter = 'Itto';
    }
    else if (this.currentCharacter == 'shikanoin-heizou') {
      this.currentCharacter = 'Heizo';
    }
    else if (this.currentCharacter == 'raiden') {
      this.currentCharacter = 'Shougun';
    }
    else if (this.currentCharacter == 'yae-miko') {
      this.currentCharacter = 'Yae';
    }
    else if (this.currentCharacter == 'kuki-shinobu') {
      this.currentCharacter = 'Shinobu';
    }
    else if (this.currentCharacter == 'baizhu') {
      this.currentCharacter = 'Baizhuer';
    }
    else if (this.currentCharacter == 'alhaitham') {
      this.currentCharacter = 'Alhatham';
    }
    else if (this.currentCharacter == 'lyney') {
      this.currentCharacter = 'Liney';
    }
    else {
      const upperName = this.currentCharacter.charAt(0).toUpperCase() + this.currentCharacter.slice(1);
      const validName = upperName.replace("-", "");
      this.validName = validName;
    }
  }
}
