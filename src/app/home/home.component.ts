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

  class1 = '';
  class2 = 'pyro';
  class3 = '';
  allCharacters = ['ayato', 'ayaka', 'raiden', 'hu-tao', 'kazuha', 'gorou', 'nahida'];
  currentIndex: number = 0;
  currentVision = 'pyro';


  addCharactersTemplate() {
    this.allCharacters.forEach(element => {
      const Url = 'https://genshin.jmp.blue/characters/' + element + '/';
      fetch(Url)
      .then(res => res.json())
      .then(data => {
        const vision = data['vision'];
  
      });
    });
    
  };

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
  }

  resetFocus() {
    this.class1 = '';
    this.class2 = '';
    this.class3 = '';
  }

  getCurrentVision() {
    return `https://genshin.jmp.blue/elements/${this.currentVision}/icon`;
  }
}

