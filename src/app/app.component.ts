import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'serempre';
  buttons =[
    {
      buttonsTitle: 'Would you like to add extend warranty coverage?.',
      btns:[
        {id: 1,title: '2 years coverage', description: 'For the past 75 years, Sennheiser has put sound first.'},
        {id: 2, title: '3 years coverage', description: 'For the past 75 years, Sennheiser has put sound first.', price: 75 }
      ]
    },
   {
      buttonsTitle: 'Features',
      btns:[
        {id: 3,title: 'Voice Assistant support', description:null},
        {id: 4,title: 'Customizable controls', description: null, price: 25 }
      ]
    }
  ];

  specifications = [
    { name: 'Dimensions', description: '76.8 x 43.8x34.7 mm (earbuds and charging case)'},
    { name: 'USB Standard', description: 'USB-C'},
    { name: 'Power supply', description: 'Sennheiser 7mm dynamic driver'},
    { name: 'Frequency response (Microphone)', description: '100 Hz to 10 kHz'},
    { name: 'Frequency response', description: '5 - 21,000 Hz'},
    { name: 'Noise cancellation', description: 'Single-Mic ANC per earbud side'}
  ];
 
  // icons=[
  //   {url: }
  // ]
}
