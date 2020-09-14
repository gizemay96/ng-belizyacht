import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-types-page',
  templateUrl: './tour-types-page.component.html',
  styleUrls: ['./tour-types-page.component.scss'],
})
export class TourTypesPageComponent implements OnInit {
  tourTypes = [
    {
      type: 'Günlük',
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: '../../../assets/34.jpg',
    },
    {
      type: 'Haftalık',
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: './../../assets/12.jpg',
    },
    {
      type: 'Aylık',
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: '../../../assets/10.JPG',
    },
    {
      type: 'Yurt Dışı',
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: '../../../assets/25.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
