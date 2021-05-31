import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finish-choose',
  templateUrl: './finish-choose.component.html',
  styleUrls: ['./finish-choose.component.scss']
})
export class FinishChooseComponent implements OnInit {
 buttons: any;
  constructor() { }

  ngOnInit(): void {
    this.buttons ={
      title: 'Choose your finish.',
      btns: [
        { title: 'Ivory White',
          description: 'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True.'},
        { title: 'Mate Black',
          description: 'Of all of the celestial bodies that capture our attention and fascination as astronomers.'}
      ]
    }
  }

}
