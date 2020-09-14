import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss'],
})
export class TeamPageComponent implements OnInit {
  crew = [
    {
      position: 'Kaptan',
      name: 'İsim',
      description:
        'This is basic card with image on top, title, description button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.',
      src:
        'https://media.gettyimages.com/photos/young-ship-captain-picture-id514726710?s=2048x2048',
    },
    {
      position: 'Aşçı',
      name: 'İsim',
      description:
        'This is basic card with image on top, title, description button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.',
      src:
        'https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
    },
    {
      position: 'Gemici',
      name: 'İsim',
      description:
        'This is basic card with image on top, title, description button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.',
      src:
        'https://media.gettyimages.com/photos/yes-sir-picture-id157283527?s=2048x2048',
    },
    {
      position: 'Hostes',
      name: 'İsim',
      description:
        'This is basic card with image on top, title, description button.This is basic card with image on top, title, description and button.This is basic card with image on top, title, description and button.',
      src:
        'https://media.gettyimages.com/photos/waitress-holding-tray-with-burger-portrait-picture-id200444952-002?s=2048x2048',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
