import { Component} from '@angular/core';
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
  clickCount: number = 0; 
  selectedMarker: string = 'x';

  constructor(){
    this.headerList = {
      0: ['Mr. Green', 'Mustard', 'Orchid', 'Peacook', 'Plum', 'Scarlett'],     
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

  chooseMarker(marker){
    this.selectedMarker = marker;
  }

  changePlayerClick(event){      
    event.preventDefault();

    this.clickCount++;
    setTimeout(() => {
        if (this.clickCount === 1) {
          event.target.classList.remove('c-img-q');
          event.target.classList.remove('c-img-x');
          event.target.classList.remove('c-img-m'); 
          event.target.classList.add('c-img-'+this.selectedMarker);   
        } else if (this.clickCount === 2) {
          event.target.classList.remove('c-img-q');
          event.target.classList.remove('c-img-x');
          event.target.classList.remove('c-img-m'); 
        } 
        this.clickCount = 0;
    }, 200) 
    
    //event.target.classList.add('c-img-x');     
    
  }

  changePlayerClickQ(event, value){  
    console.log('calue');
  }
}
