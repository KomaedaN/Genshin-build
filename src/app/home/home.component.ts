import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {}

  slides = [
    { src: "https://genshin.jmp.blue/elements/hydro/icon", title: 'hydro'},
    { src: "https://genshin.jmp.blue/elements/pyro/icon", title: 'pyro'},
    { src: "https://genshin.jmp.blue/elements/geo/icon", title: 'geo'},
    { src: "https://genshin.jmp.blue/elements/anemo/icon", title: 'anemo'},
    { src: "https://genshin.jmp.blue/elements/cryo/icon", title: 'cryo'},
    { src: "https://genshin.jmp.blue/elements/electro/icon", title: 'electro'},
    { src: "https://genshin.jmp.blue/elements/dendro/icon", title: 'dendro'},
    
  ]
  ngOnInit(): void {
 
  }

  allCharacters = [
    { hydro: [ 'yelan', 'tartaglia', 'kokomi', 'nilou', 'xingqiu', 'mona', 'barbara'], lengthCharacters: 7},
    { pyro: ['hu-tao', 'xiangling', 'bennett', 'yoimiya', 'diluc'], lengthCharacters: 5},
    { geo: ['arataki-itto', 'zhongli', 'albedo', 'gorou', 'yun-jin'], lengthCharacters: 5},
    { anemo: ['kazuha', 'xiao', 'venti', 'shikanoin-heizou', 'sucrose', 'faruzan'], lengthCharacters: 6},
    { cryo: ['ayaka', 'eula', 'shenhe', 'kaeya', 'layla'], lengthCharacters: 5},
    { electro: ['yae-miko', 'cyno', 'raiden', 'fischl', 'kuki-shinobu'], lengthCharacters: 5},
    { dendro: ['alhaitham', 'baizhu', 'nahida', 'tighnari','kaveh'], lengthCharacters: 5},
  ];

  class1 = '';
  class2 = 'pyro';
  class3 = '';
  
  currentIndex: number = 0;
  currentVision = 'pyro';
  currentCharacter = 'hu-tao';
  description = "The young but highly accomplished head of the Yashiro Commisson's Kamisato Clan. Cultured and polite, he is a man of many ways and means.";
  currentNation = 'Liyue';
  charactersIndex: number = 0;
  currentCharacterImg = 'https://genshin.jmp.blue/characters/hu-tao/gacha-splash';

  getCurrentSlideUrl(add: number) {
    return `${this.slides[this.currentIndex + add].src}`
  }
  
  previousSlide() {
    this.resetFocus()
    if (this.currentIndex != 0) {
      this.currentIndex = this.currentIndex - 1;
    }
  }

  nextSlide() {
    this.resetFocus()
    if ((this.currentIndex + 2) < this.slides.length -1) {
      this.currentIndex = this.currentIndex + 1;
    }
  }

  currentElementFocus(add:number, classNumber: number){
    this.resetFocus()
    if (classNumber === 1) {
      this.class1 = this.slides[this.currentIndex + add].title;
    }
    else if (classNumber === 2) {
      this.class2 = this.slides[this.currentIndex + add].title;
    }
    else if (classNumber === 3) {
      this.class3 = this.slides[this.currentIndex + add].title;
    }
    this.currentVision = this.slides[this.currentIndex + add].title;
    this.getCurrentVision();
    this.charactersIndex = 0;
    this.getCharacterData(0);
  }

  resetFocus() {
    this.class1 = '';
    this.class2 = '';
    this.class3 = '';
  }

  getCurrentVision() {
    return `https://genshin.jmp.blue/elements/${this.currentVision}/icon`;
  }

  getCurrentCharacter() {
    return `https://genshin.jmp.blue/characters/${this.currentCharacter}/icon-big`
  }

  getCharacterUrl(add: number) {
    if( this.currentVision === "hydro") {
      const element = this.allCharacters[0]?.[this.currentVision];
      return `https://genshin.jmp.blue/characters/${element ? element[this.charactersIndex + add] : undefined}/icon-big`;
    }
    else if( this.currentVision === "pyro") {
      const element = this.allCharacters[1]?.[this.currentVision]
      return `https://genshin.jmp.blue/characters/${element ? element[this.charactersIndex + add] : undefined}/icon-big`;
    }
    else if( this.currentVision === "geo") {
      const element = this.allCharacters[2]?.[this.currentVision]
      return `https://genshin.jmp.blue/characters/${element ? element[this.charactersIndex + add] : undefined}/icon-big`;
    }
    else if( this.currentVision === "anemo") {
      const element = this.allCharacters[3]?.[this.currentVision]
      return `https://genshin.jmp.blue/characters/${element ? element[this.charactersIndex + add] : undefined}/icon-big`;
    }
    else if( this.currentVision === "cryo") {
      const element = this.allCharacters[4]?.[this.currentVision]
      return `https://genshin.jmp.blue/characters/${element ? element[this.charactersIndex + add] : undefined}/icon-big`;
    }
    else if( this.currentVision === "electro") {
      const element = this.allCharacters[5]?.[this.currentVision]
      return `https://genshin.jmp.blue/characters/${element ? element[this.charactersIndex + add] : undefined}/icon-big`;
    }
    else if( this.currentVision === "dendro") {
      const element = this.allCharacters[6]?.[this.currentVision]
      return `https://genshin.jmp.blue/characters/${element ? element[this.charactersIndex + add] : undefined}/icon-big`;
    }
    return '';
  }

  previousCharacter() {
    this.allCharacters.forEach(element => {
      if(this.currentVision in element) {
        if (this.charactersIndex != 0) {
          this.charactersIndex = this.charactersIndex - 1;
        }
      }
    });
  }

  nextCharacter() {
    this.allCharacters.forEach(element => {
      if(this.currentVision in element) {
        if ((this.charactersIndex + 4) < element.lengthCharacters) {
          this.charactersIndex = this.charactersIndex + 1;
        }
      }
    });
  }
  getCharacterData(add: number) {
    if (this.currentVision === 'hydro') {
      const element = this.allCharacters[0]?.[this.currentVision];
      const character = element ? element[this.charactersIndex + add] : undefined
      this.updateCharacterData(character ?? '');
    }
    else if(this.currentVision === 'pyro') {
      const element = this.allCharacters[1]?.[this.currentVision];
      const character = element ? element[this.charactersIndex + add] : undefined
      this.updateCharacterData(character ?? '');
    }
    else if(this.currentVision === 'geo') {
      const element = this.allCharacters[2]?.[this.currentVision];
      const character = element ? element[this.charactersIndex + add] : undefined
      this.updateCharacterData(character ?? '');
    }
    else if(this.currentVision === 'anemo') {
      const element = this.allCharacters[3]?.[this.currentVision];
      const character = element ? element[this.charactersIndex + add] : undefined
      this.updateCharacterData(character ?? '');
    }
    else if(this.currentVision === 'cryo') {
      const element = this.allCharacters[4]?.[this.currentVision];
      const character = element ? element[this.charactersIndex + add] : undefined
      this.updateCharacterData(character ?? '');
    }
    else if(this.currentVision === 'electro') {
      const element = this.allCharacters[5]?.[this.currentVision];
      const character = element ? element[this.charactersIndex + add] : undefined
      this.updateCharacterData(character ?? '');
    }
    else if(this.currentVision === 'dendro') {
      const element = this.allCharacters[6]?.[this.currentVision];
      const character = element ? element[this.charactersIndex + add] : undefined
      this.updateCharacterData(character ?? '');
    }
  }
  updateCharacterData(character: string) {
      fetch(`https://genshin.jmp.blue/characters/${character}/`)
        .then(res => res.json())
        .then(data => {
          this.description = String(data['description'])
        });
      this.currentCharacterImg = `https://genshin.jmp.blue/characters/${character}/gacha-splash`;
      this.currentCharacter = character ?? '';
  }
}

