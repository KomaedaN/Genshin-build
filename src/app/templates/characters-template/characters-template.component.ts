import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/service/characters.service';

@Component({
  selector: 'app-characters-template',
  templateUrl: './characters-template.component.html',
  styleUrls: ['./characters-template.component.scss'],
})
export class CharactersTemplateComponent {
  public name: string = '';
  constructor(
    private route: ActivatedRoute,
    private charactersService: CharactersService
  ) {}

  ngOnInit() {}

  allChara = this.charactersService.charcterTemplate;
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

  cardUrl = 'https://gi.yatta.moe/assets/UI/namecard/UI_NameCardPic_';

  displayElement(visionType: string) {
    this.displayAll = false;
    this.visions[visionType] = !this.visions[visionType];
    this.displayAllElements();
    const id = document.getElementById(visionType + '_btn');
    if (this.visions[visionType] === true) {
      id?.classList.add(visionType);
    } else if (this.visions[visionType] === false) {
      id?.classList.remove(visionType);
    }
  }

  displayAllElements() {
    if (
      !this.visions['Hydro'] &&
      !this.visions['Cryo'] &&
      !this.visions['Pyro'] &&
      !this.visions['Anemo'] &&
      !this.visions['Electro'] &&
      !this.visions['Dendro'] &&
      !this.visions['Geo']
    ) {
      this.displayAll = true;
    }
  }
}
