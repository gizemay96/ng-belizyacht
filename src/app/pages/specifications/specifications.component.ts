import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specifications',
  templateUrl: './specifications.component.html',
  styleUrls: ['./specifications.component.scss']
})
export class SpecificationsComponent implements OnInit {
  currentJustify = 'justified';


  genericSpec = [
    {title: "Marka" , text: "Maiora"},
    {title: "Tip" , text: "Motoryat"},
    {title: "Üretim Yılı" , text: "1998"},
    {title: "Uzunluk" , text: "22.7 m"},
    {title: "Yolcu Kapasitesi" , text: "8 kişi"},
    {title: "Maksimum Hız" , text: "27 knots"},
    {title: "Draft" , text: "2.8 m"},
    {title: "Jeneratör" , text: "2 x 27Kw"},
    {title: "WaterMaker" , text: "Var"},
  ]

  cabinSpec = [
    {title: "Kabin Sayısı" , text: "4 adet"},
    {title: "Master Kabin" , text: "1 adet"},
    {title: "VIP Kabin" , text: "1 adet"},
    {title: "Twin" , text: "2 adet"},
    {title: "Lavabo & Duş" , text: "3 adet"},
    {title: "Klima" , text: "Var"},
  ]


  otherSpec = [
    {title: "Su Sporları"},
    {title: "Yüzme Merdiveni"},
    {title: "Güverte Duş"},
    {title: "Ses Sistemi"},
    {title: "DVD,CD,BlueRay"},
    {title: "Tente"},
    {title: "Güneşlenme Minderleri"},
    {title: "Masa oyunları"},
  ]




  constructor() { }

  ngOnInit(): void {
  }

}
