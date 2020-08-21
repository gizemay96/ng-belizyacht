import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() title:string="";
  @Input() description:string="";
  @Input() buttonText:string="";
  @Input() imgSrc:string="";

  constructor() { }

  ngOnInit(): void {
  }

}
