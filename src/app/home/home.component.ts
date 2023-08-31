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
    this.addCharactersTemplate();
  }
  allCharacters = ['ayato', 'ayaka', 'raiden', 'hu-tao', 'kazuha', 'gorou', 'nahida'];
  test = 'rff';
  hydro = 'hydro';
  template = '';


  addCharactersTemplate() {
    this.allCharacters.forEach(element => {
      const Url = 'https://genshin.jmp.blue/characters/' + element + '/';
      fetch(Url)
      .then(res => res.json())
      .then(data => {
        const vision = data['vision'];
        const template = `
                          <img src="https://genshin.jmp.blue/characters/${element}/icon-big" class="card__img">
                          <div id="test">
                          <h1>${element}</h1>
                          <h2>Vision: ${data['vision']}</h2>
                          <h2>Nation: ${data['nation']}</h2>
                          </div>`
        const section = this.el.nativeElement.querySelector('#characters-section');
        const div = this.renderer.createElement('div');
        div.innerHTML = template;
        
        this.renderer.addClass(div, 'card');
        this.renderer.addClass(div, vision);
        this.renderer.setAttribute(div, 'id', 'card_id')
        this.renderer.appendChild(section, div);
      });
    });
    const card_img = document.createElement('style');
      card_img.textContent = `
      .card__img{
        height: 256px;
      }`;
      document.head.appendChild(card_img);
  };

  passData() {
    this.router.navigateByUrl('tt '+ this.test +'');
  };

}

