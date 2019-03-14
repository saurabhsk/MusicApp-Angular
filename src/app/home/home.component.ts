import { Component, OnInit } from '@angular/core';
import{ MusicdataService } from '../musicdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private musicdataService:MusicdataService,private route: Router) { }
  ListOfMusic:any= []
  ngOnInit() {

    this.musicdataService.getAllMusic().subscribe(data=>{
        console.log(data);
        this.ListOfMusic=data.tracks.track;
    });
  }
  Onclick(value){
    this.route.navigateByUrl("/result/"+value);
  }
  showDetail(music){
    this.musicdataService.setDetailsMusicTrend(music);
    this.route.navigateByUrl("/details/"+music.name);
}
  addToFavsfromTrend(music){
    this.musicdataService.setFavouriteMusicTrends(music);
  }


}
