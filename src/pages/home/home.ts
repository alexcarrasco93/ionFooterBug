import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  code = '';

  constructor(public navController: NavController) { }
  
  populateInput() {
    this.code = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam odit incidunt aliquam id laborum veniam fugiat temporibus neque adipisci nisi laudantium, porro itaque, dolorum officia! Dolorem sequi eum modi unde.';
  }

}
