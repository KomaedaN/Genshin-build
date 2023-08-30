import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router, private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.url();
    this.addCharactersTemplate();
  }
  allCharacters = ['ayato', 'ayaka', 'raiden'];
  test = 'rff';
  hydro = 'hydro';
  template = '';

  url() {
    const Url = "https://genshin.jmp.blue/characters/ayato/";
    fetch(Url)
    .then(res => res.json())
    .then(data => {
    })
  };

  addCharactersTemplate() {
    this.allCharacters.forEach(element => {
      const Url = 'https://genshin.jmp.blue/characters/' + element + '/';
      fetch(Url)
      .then(res => res.json())
      .then(data => {
      const template = `
                        <img src="https://genshin.jmp.blue/characters/${element}/icon">
                        <div id="test">
                        <h1>${element}</h1>
                        <h2>Vision: ${data['vision']}</h2>
                        </div>`
      const section = this.el.nativeElement.querySelector('#characters-section');
      const div = this.renderer.createElement('div');
      div.innerHTML = template;
      this.renderer.addClass(div, 'card');
      this.renderer.appendChild(section, div);
      });
    });
  }

  passData() {
    this.router.navigateByUrl('tt '+ this.test +'');
  };

}

