import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-photos-page',
  templateUrl: './photos-page.component.html',
  styleUrls: ['./photos-page.component.scss']
})
export class PhotosPageComponent implements OnInit {

  
  photos = [
    {id:1 , src:"../../../assets/23.jpg" },
    {id:2 , src:"../../../assets/24.jpg" },
    {id:3 , src:"../../../assets/26.jpg" },
    {id:4 , src:"../../../assets/30.jpg" },
    {id:5 , src:"../../../assets/7.JPG" },
    {id:5 , src:"../../../assets/17.jpg" },
    {id:6 , src:"../../../assets/5.JPG" },
    {id:7 , src:"../../../assets/27.jpg" },
    {id:8 , src:"../../../assets/28.jpg" },
    {id:9 , src:"../../../assets/33.jpg" },
    {id:10 , src:"../../../assets/19.jpg" },
    {id:11, src:"../../../assets/14.jpg" },
    {id:12 , src:"../../../assets/21.jpg" },
    {id:13, src:"../../../assets/22.jpg" },
    {id:14 , src:"../../../assets/16.jpg" },
    {id:15 , src:"../../../assets/18.jpg" },
    {id:16, src:"../../../assets/13.jpg" },
  ]
  
  showNavigationArrows = false;
  showNavigationIndicators = false;
  


  slidePhotos = [
    {id:1 , src:"../../../assets/23.jpg" },
    {id:2 , src:"../../../assets/24.jpg" },
    {id:3 , src:"../../../assets/26.jpg" },
    {id:4 , src:"../../../assets/30.jpg" },
    {id:5 , src:"../../../assets/7.JPG" },
    {id:6 , src:"../../../assets/17.jpg" },
    {id:7 , src:"../../../assets/5.JPG" },
    {id:8 , src:"../../../assets/27.jpg" },
    {id:9 , src:"../../../assets/28.jpg" },
    {id:10,src:"../../../assets/33.jpg" },
    {id:11, src:"../../../assets/19.jpg" },
    {id:12, src:"../../../assets/14.jpg" },
    {id:13, src:"../../../assets/21.jpg" },
    {id:14, src:"../../../assets/22.jpg" },
    {id:15, src:"../../../assets/16.jpg" },
    {id:16, src:"../../../assets/18.jpg" },
    {id:17, src:"../../../assets/13.jpg" },
  ]

  selectedSrc;
  active:boolean=false;

  

  constructor(config: NgbCarouselConfig) { 
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }

  ngOnInit(): void {
  }

  getImg(id){
    console.log(id)
    if(this.slidePhotos.map(p => p.id === id)){
      this.active = true;
    }
  }



  

}
