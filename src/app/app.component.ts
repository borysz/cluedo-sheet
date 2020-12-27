import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Cluedo Sheet';
  headerList = {};
  playersForm: FormGroup;



  constructor(){
    this.headerList = {
      0: ['Mr. Green', 'Musterd', 'Orchid', 'Peacook', 'Pulm', 'Scarlett'],     
      1: ['Bálterem', 'Billiárdszoba', 'Télikert', 'Ebédlő', 'Hall', 'Konyha', 'Könyvtár', 'Társalgó', 'Dolgozószoba'],
      2: ['Gyertyatartó', 'Tőr', 'Ólmosbot', 'Revolver', 'Szobor', 'Méreg'],
    }
  }

  ngOnInit(){
    this.playersForm = new FormGroup({
      player_2: new FormControl(),
      player_3: new FormControl(),
      player_4: new FormControl(),
      player_5: new FormControl(),
      player_6: new FormControl(),
    });
  }

  onSubmitForm() {
  }

  changePlayerClick(event){
    console.log(event);
  }
}
