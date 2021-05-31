import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extra-buttons',
  templateUrl: './extra-buttons.component.html',
  styleUrls: ['./extra-buttons.component.scss']
})
export class ExtraButtonsComponent implements OnInit {
@Input() buttons: any;
selectedButton: any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.buttons);
  }

}
