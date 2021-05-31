import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-view',
  templateUrl: './tabs-view.component.html',
  styleUrls: ['./tabs-view.component.scss']
})
export class TabsViewComponent implements OnInit {
 tabs: any[] = [];
 selectedTab: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.tabs =[
      {
        tabTitle: 'Overview', 
        content: 'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is not different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for fully day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.'
      },
      {
        tabTitle: 'Features',
        content:'Some features here'
      },
      {
        tabTitle: `What's in the box`,
        content: 'The box contains ...'
      }
    ]
  }

}
