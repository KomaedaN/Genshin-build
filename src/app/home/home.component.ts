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
    { src: "https://genshin.jmp.blue/elements/hydro/icon", title: 'Hydro'},
    { src: "https://genshin.jmp.blue/elements/pyro/icon", title: 'Pyro'},
    { src: "https://genshin.jmp.blue/elements/geo/icon", title: 'Geo'},
    { src: "https://genshin.jmp.blue/elements/anemo/icon", title: 'Anemo'},
    { src: "https://genshin.jmp.blue/elements/cryo/icon", title: 'Cryo'},
    { src: "https://genshin.jmp.blue/elements/electro/icon", title: 'Electro'},
    { src: "https://genshin.jmp.blue/elements/dendro/icon", title: 'Dendro'},
    
  ]
  ngOnInit(): void {
 
  }

  allCharacters = ['ayato', 'ayaka', 'raiden', 'hu-tao', 'kazuha', 'gorou', 'nahida'];
  currentIndex: number = 0;
  elementFocus: string = 'pyro'


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
    if (this.currentIndex != 0) {
      this.currentIndex = this.currentIndex - 1;
    }
  }

  nextSlide() {
    if ((this.currentIndex + 2) < this.slides.length -1) {
      this.currentIndex = this.currentIndex + 1;
    }
  }

  currentElementFocus(add: number, id: string){
    if ((this.currentIndex + add) !== this.slides.length -2 && (this.currentIndex + add)  !== -1){
      this.currentIndex = this.currentIndex + add;
      console.log(this.slides[this.currentIndex +1].src)
      const focusId = document.getElementById(id);
      focusId?.classList.add(this.slides[this.currentIndex +1].title)
    }
    
  }

}

