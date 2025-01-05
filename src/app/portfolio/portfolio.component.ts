import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  isclick: boolean=false;
  CurrentImg:string=''
  open(ImgSrc:string){
    this.isclick = true;
    this.CurrentImg=ImgSrc;
    
  };
  Closeee(){
    this.isclick = false;
  } 

}
