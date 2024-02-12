import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../service/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }
  
  ngOnInit(): void {
    this.getCurrentCharacter();
  }

  imgName = '';
  validName = '';
  currentCharacter = '';
  currentData = {name: '', weapons: [['']], artifact: '', mainstats: [''], substats: [''], skills: [''], ascensions: [''], talents: ['']};
  allCharactersData = this.charactersService.allCharactersBuildData;
  
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
    if (this.currentCharacter == 'Arataki-itto') {
      this.currentCharacter = 'Itto';
    }
    else if (this.currentCharacter == 'Heizo') {
      this.currentCharacter = 'Heizou';
    }
    else if (this.currentCharacter == 'Shougun') {
      this.currentCharacter = 'Raiden';
    }
    else if (this.currentCharacter == 'Yae-miko') {
      this.currentCharacter = 'Yae';
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
    else if (this.currentCharacter == 'Yunjin') {
      this.currentCharacter = 'Yun-jin';
    }
    else if (this.currentCharacter == 'Liuyun') {
      this.currentCharacter = 'Xianyun';
    }
    else {
      const upperName = this.currentCharacter.charAt(0).toUpperCase() + this.currentCharacter.slice(1);
      const validName = upperName.replace("-", "");
      this.validName = validName;
    }
  }
}
