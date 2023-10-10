import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  ngOnInit(): void {

  }
  displayNav = false;
  
  showNavDetails(){
    this.displayNav = true;
  }

  hideNavDetails() {
    this.displayNav = false;
  }

}
