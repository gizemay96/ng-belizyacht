import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent implements OnInit {
  services = [
    {
      title: 'Motoryat',
      description:
        '23 metre , dört kabin , Mairo marka teknemiz konforun en keyifli halini tatmanız için hizmetinizde olacaktır.',
      icon: '../../../assets/icon-1.png',
    },
    {
      title: 'Kaptan',
      description:
        'Alanında uzman kaptanımız tatiliniz boyunca dilediğiniz rotaya güvenli ve konforlu ulaşımınız için size eşlik edecektir.',
      icon: '../../../assets/captain-hat.png',
    },
    {
      title: 'Yemek',
      description:
        ' Bilyoruz ki tatilde eğlenmek kadar güzel yemekte önemlidir.Sabah,öğle ve akşam yemeği hizmetimiz,şefimiz tarafından sağlanacaktır.',
      icon: '../../../assets/icon-shef.png',
    },
    {
      title: 'Servis',
      description:
        'İki adet hostesimiz tüm servis ihtiyaçlarınız doğrultusunda tatiliniz boyunca size eşlik edecektir.',
      icon: '../../../assets/icon-service.png',
    },
    {
      title: 'Temizlik Ve Bakım',
      description:
        ' Teknemizde tatiliniz boyunca kamaralarınız ve yaşam alanlarımız günlük olarak temizlenmektedir.',
      icon: '../../../assets/icon-clean.png',
    },
    {
      title: 'Deniz Sporu Ve Oyuncaklar',
      description:
        'Jetski,Seabob,Waterski,Ringo,Snorkeling gear,Fishing gear...',
      icon: '../../../assets/icon-jetski.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
