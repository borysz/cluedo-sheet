import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cluedo Sheet';
  headerList = {};

  constructor(){
    this.headerList = {
      0: ['Mr. Green', 'Musterd', 'Orchid', 'Peacook', 'Pulm', 'Scarlett'],     
      1: ['Bálterem', 'Billiárdszoba', 'Télikert', 'Ebédlő', 'Hall', 'Konyha', 'Könyvtár', 'Társalgó', 'Dolgozószoba'],
      2: ['Gyertyatartó', 'Tőr', 'Ólmosbot', 'Revolver', 'Szobor', 'Méreg'],
    }
  }
}
