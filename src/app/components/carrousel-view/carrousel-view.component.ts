import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrousel-view',
  templateUrl: './carrousel-view.component.html',
  styleUrls: ['./carrousel-view.component.scss']
})
export class CarrouselViewComponent implements OnInit {
  images: any[] = []
  urlSelected: string ='';
  classSelected: any;
  constructor() { }

  ngOnInit(): void {
    this.images = [
      {
        url: '../../../assets/img/product.png',
        index: 0,
        class: 'first-image',
        classToShow:'first-image-big'
      },
      {
        url: '../../../assets/img/big-MOMENTUM-TRUEWIRELESS2@2x-1.png',
        index: 1,
        class:'second-image',
        classToShow: 'second-image-big'
      },
      {
        url: '../../../assets/img/ScreenShot 2020-08-11 at 10.15.55@3x.png',
        index: 2,
        class: 'third-image',
        classToShow:'third-image-big'
      },
    ]
    this.selectImage(this.images[0]);
  }
  selectImage(image: any): void{
    this.urlSelected = image.url;
    this.classSelected = image.classToShow;
  }

}
