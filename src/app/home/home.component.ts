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
    { hydro: [ 'tartaglia', 'yelan', 'kokomi', 'nilou', 'mona', 'xingqiu'], lengthCharacters: 6},
    { pyro: ['hu-tao', 'lyney','xiangling', 'bennett', 'yoimiya'], lengthCharacters: 5},
    { geo: ['arataki-itto', 'zhongli', 'albedo', 'gorou', 'yun-jin'], lengthCharacters: 5},
    { anemo: ['kazuha', 'xiao', 'venti', 'shikanoin-heizou', 'sucrose', 'faruzan'], lengthCharacters: 6},
    { cryo: ['ayaka', 'eula', 'shenhe', 'ganyu', 'layla'], lengthCharacters: 5},
    { electro: ['yae-miko', 'cyno', 'raiden', 'fischl', 'kuki-shinobu'], lengthCharacters: 5},
    { dendro: ['alhaitham', 'baizhu', 'nahida', 'tighnari','kaveh'], lengthCharacters: 5},
  ];

  class1 = '';
  class2 = 'pyro';
  class3 = '';
  
  currentIndex: number = 0;
  currentVision = 'pyro';
  currentCharacter = 'hu-tao';
  description = "The 77th Director of the Wangsheng Funeral Parlor. She took over the business at a rather young age.";
  currentNation = 'Liyue';
  charactersIndex: number = 0;
  currentCharacterImg = 'https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Hutao.png';
  

  getCurrentSlideUrl(add: number) {
    return `${this.slides[this.currentIndex + add].src}`
  }
  
  previousSlide() {
    this.resetFocus()
    if (this.currentIndex != 0) {
      this.animationVision(-1);
    }
  }

  nextSlide() {
    this.resetFocus()
    if ((this.currentIndex + 2) < this.slides.length -1) {
      this.animationVision(+1);
    }
  }

  

  currentElementFocus(add:number, classNumber: number){
    const visionId = document.getElementById('vision-btn') as HTMLElement;
    visionId.classList.add('disableClick');
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

    
    
    
    setTimeout (() => {
      visionId.classList.remove('disableClick');
    }, 1000);
    
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
      const character = element ? element[this.charactersIndex + add] : undefined;
      const validName = this.verifyName(String(character));
      return `https://api.ambr.top/assets/UI/UI_AvatarIcon_${validName}.png`;
    }
    else if( this.currentVision === "pyro") {
      const element = this.allCharacters[1]?.[this.currentVision]
      const character = element ? element[this.charactersIndex + add] : undefined;
      const validName = this.verifyName(String(character));
      return `https://api.ambr.top/assets/UI/UI_AvatarIcon_${validName}.png`;
    }
    else if( this.currentVision === "geo") {
      const element = this.allCharacters[2]?.[this.currentVision]
      const character = element ? element[this.charactersIndex + add] : undefined;
      const validName = this.verifyName(String(character));
      return `https://api.ambr.top/assets/UI/UI_AvatarIcon_${validName}.png`;
    }
    else if( this.currentVision === "anemo") {
      const element = this.allCharacters[3]?.[this.currentVision]
      const character = element ? element[this.charactersIndex + add] : undefined;
      const validName = this.verifyName(String(character));
      return `https://api.ambr.top/assets/UI/UI_AvatarIcon_${validName}.png`;
    }
    else if( this.currentVision === "cryo") {
      const element = this.allCharacters[4]?.[this.currentVision]
      const character = element ? element[this.charactersIndex + add] : undefined;
      const validName = this.verifyName(String(character));
      return `https://api.ambr.top/assets/UI/UI_AvatarIcon_${validName}.png`;
    }
    else if( this.currentVision === "electro") {
      const element = this.allCharacters[5]?.[this.currentVision]
      const character = element ? element[this.charactersIndex + add] : undefined;
      const validName = this.verifyName(String(character));
      return `https://api.ambr.top/assets/UI/UI_AvatarIcon_${validName}.png`;
    }
    else if( this.currentVision === "dendro") {
      const element = this.allCharacters[6]?.[this.currentVision]
      const character = element ? element[this.charactersIndex + add] : undefined;
      const validName = this.verifyName(String(character));
      return `https://api.ambr.top/assets/UI/UI_AvatarIcon_${validName}.png`;
    }
    return '';
  }

  previousCharacter() {
    this.allCharacters.forEach(element => {
      if(this.currentVision in element) {
        if (this.charactersIndex != 0) {
          this.animationCharacters(-1);
        }
      }
    });
  }

  nextCharacter() {
    this.allCharacters.forEach(element => {
      if(this.currentVision in element) {
        if ((this.charactersIndex + 4) < element.lengthCharacters) {
          this.animationCharacters(1);
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
    const valideName = this.verifyName(character);
    const imgId = document.getElementById('gacha_image') as HTMLElement;
    const characters = document.getElementById('characters') as HTMLElement;
    const name = document.getElementById('characterName') as HTMLElement;
    const visionId = document.getElementById('currentVisionImg') as HTMLElement;
    const descriptionId = document.getElementById('descriptionContainer') as HTMLElement;
    characters.classList.add('disableClick');

    imgId.classList.add('gachaImgAnimationReverse');
    imgId.classList.remove('gachaImgAnimation');
    name.classList.add('characterAnimationReverse');
    name.classList.remove('characterAnimation');
    visionId.classList.add('visionAnimationReverse');
    visionId.classList.remove('visionAnimation');
    descriptionId.classList.add('characterAnimationReverse');
    descriptionId.classList.remove('characterAnimation');
    setTimeout(() => {
      fetch(`https://genshin.jmp.blue/characters/${character}/`)
        .then(res => res.json())
        .then(data => {
          this.description = String(data['description'])
        });
      this.currentCharacterImg = `https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_${valideName}.png`;
      this.currentCharacter = character ?? '';
      imgId.classList.remove('gachaImgAnimationReverse');
      imgId.classList.add('gachaImgAnimation');
      name.classList.remove('characterAnimationReverse');
      name.classList.add('characterAnimation');
      visionId.classList.remove('visionAnimationReverse');
      visionId.classList.add('visionAnimation');
      descriptionId.classList.remove('characterAnimationReverse');
      descriptionId.classList.add('characterAnimation');
      characters.classList.remove('disableClick');
    },700);
  }

  animationVision(index: number) {
    const visionId = document.getElementById('vision-btn') as HTMLElement;
    visionId.classList.add('disableClick');
    const btnVision1 = document.getElementById('element__1') as HTMLElement;
    const btnVision2 = document.getElementById('element__2') as HTMLElement;
    const btnVision3 = document.getElementById('element__3') as HTMLElement;
    btnVision1.classList.add('visionBtnAnimationReverse');
    btnVision1.classList.remove('visionBtnAnimation');
    btnVision2.classList.add('visionBtnAnimationReverse');
    btnVision2.classList.remove('visionBtnAnimation');
    btnVision3.classList.add('visionBtnAnimationReverse');
    btnVision3.classList.remove('visionBtnAnimation');
    setTimeout (() => {
      btnVision1.classList.add('visionBtnAnimation');
      btnVision1.classList.remove('visionBtnAnimationReverse');
      btnVision2.classList.add('visionBtnAnimation');
      btnVision2.classList.remove('visionBtnAnimationReverse');
      btnVision3.classList.add('visionBtnAnimation');
      btnVision3.classList.remove('visionBtnAnimationReverse');
      visionId.classList.remove('disableClick');
      this.currentIndex = this.currentIndex + index;
    },500)
  }

  animationCharacters(index: number) {
    const btnId = document.getElementById('characters') as HTMLElement;
    const btnCharacter1 = document.getElementById('character_1') as HTMLElement;
    const btnCharacter2 = document.getElementById('character_2') as HTMLElement;
    const btnCharacter3 = document.getElementById('character_3') as HTMLElement;
    const btnCharacter4 = document.getElementById('character_4') as HTMLElement;
    btnId.classList.add('disableClick');
    btnCharacter1.classList.add('characterBtnAnimationReverse');
    btnCharacter1.classList.remove('characterBtnAnimation');
    btnCharacter2.classList.add('characterBtnAnimationReverse');
    btnCharacter2.classList.remove('characterBtnAnimation');
    btnCharacter3.classList.add('characterBtnAnimationReverse');
    btnCharacter3.classList.remove('characterBtnAnimation');
    btnCharacter4.classList.add('characterBtnAnimationReverse');
    btnCharacter4.classList.remove('characterBtnAnimation');
    setTimeout(() => {
      btnCharacter1.classList.add('characterBtnAnimation');
      btnCharacter1.classList.remove('characterBtnAnimationReverse');
      btnCharacter2.classList.add('characterBtnAnimation');
      btnCharacter2.classList.remove('characterBtnAnimationReverse');
      btnCharacter3.classList.add('characterBtnAnimation');
      btnCharacter3.classList.remove('characterBtnAnimationReverse');
      btnCharacter4.classList.add('characterBtnAnimation');
      btnCharacter4.classList.remove('characterBtnAnimationReverse');
      btnId.classList.remove('disableClick');
      this.charactersIndex = this.charactersIndex + index;
    },700)
  }

  verifyName(character: string) {
    if (character == 'arataki-itto') {
      return 'Itto';
    }
    else if (character == 'shikanoin-heizou') {
      return 'Heizo';
    }
    else if (character == 'raiden') {
      return 'Shougun';
    }
    else if (character == 'yae-miko') {
      return 'Yae';
    }
    else if (character == 'kuki-shinobu') {
      return 'Shinobu';
    }
    else if (character == 'baizhu') {
      return 'Baizhuer';
    }
    else if (character == 'alhaitham') {
      return 'Alhatham';
    }
    else if (character == 'lyney') {
      return 'Liney';
    }
    else {
      const upperName = character.charAt(0).toUpperCase() + character.slice(1);
      const valideName = upperName.replace("-", "");
      return valideName;
    }

  }
}

