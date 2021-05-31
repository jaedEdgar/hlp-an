import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.scss']
})
export class SpecificationsComponent implements OnInit {
  @Input() list: any;
  constructor() { }

  ngOnInit(): void {
  }

}
