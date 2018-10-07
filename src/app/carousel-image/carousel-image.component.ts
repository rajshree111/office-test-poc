import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-image',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.css']
})
export class CarouselImageComponent implements OnInit {
  items: Array<any> = []

  constructor() {
    this.items = [
      { name: 'assets/images/professional_website.jpg' },
      { name: 'assets/images/nature_1200_800.jpg' },
      { name: 'assets/images/nature.jpg' },
      { name: 'assets/images/nature.jpg' },
      { name: 'assets/images/nature.jpg' },
    ]
  }

  ngOnInit() {
  }

}
