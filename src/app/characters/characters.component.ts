import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  public name: string = '';
  constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.start();
  }

  characters = ["albedo","alhaitham","aloy","amber","arataki-itto","ayaka","ayato","baizhu","barbara","beidou","bennett","candace","chongyun","collei",
  "cyno","dehya","diluc","diona","dori","eula","faruzan","fischl","freminet","ganyu","gorou","hu-tao","jean","kaeya","kaveh","kazuha","keqing","kirara",
  "klee","kokomi","kuki-shinobu","layla","lisa","lynette","lyney","mika","mona","nahida","nilou","ningguang","noelle","qiqi","raiden","razor","rosaria",
  "sara","sayu","shenhe","shikanoin-heizou","sucrose","tartaglia","thoma","tighnari","venti","wanderer","xiangling","xiao","xingqiu","xinyan","yae-miko",
  "yanfei","yaoyao","yelan","yoimiya","yun-jin","zhongli"];

  allCharacters: { name: string; vision: string;}[] = [];

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

  start() {
    this.characters.forEach(element => {
      const Url = 'https://genshin.jmp.blue/characters/' + element + '/';
      fetch(Url)
      .then(res => res.json())
      .then(data => {
        const currentVision = String(data['vision'])
        const newCharacter = { name: element, vision: currentVision };
        this.allCharacters.push(newCharacter);
      });
    });
  }

  displayElement(visionType: string) {
    this.displayAll = false;
    this.visions[visionType] = !this.visions[visionType];
    this.displayAllElements();
    const id = document.getElementById(visionType + "_btn");
    if (this.visions[visionType] === true) {
      id?.classList.add(visionType);
    } else if (this.visions[visionType] === false) {
      id?.classList.remove(visionType);
    };
    
    

  }

  displayAllElements() {
    if (!this.visions["Hydro"] && !this.visions["Cryo"] && !this.visions["Pyro"] && !this.visions["Anemo"] && !this.visions["Electro"] && !this.visions["Dendro"] && !this.visions["Geo"]){
      this.displayAll = true;
    }
  }
}
