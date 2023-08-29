import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  ngOnInit(): void {
    this.url();
  }
  character = '';

  url() {
    const Url = "https://genshin.jmp.blue/characters";
    fetch(Url)
    .then(res => res.json())
    .then(data => {
      this.character = data;
        console.log(data);
    })
  }
}
