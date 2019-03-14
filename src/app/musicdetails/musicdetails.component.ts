import { Component, OnInit } from '@angular/core';
import {MusicdataService} from '../musicdata.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-musicdetails',
  templateUrl: './musicdetails.component.html',
  styleUrls: ['./musicdetails.component.css']
})
export class MusicdetailsComponent implements OnInit {


  musiclistTrend:any=[];
  musiclistSearch:any=[];

  musiclistFavSearch:any=[];
  musiclistFavTrend:any=[];

  constructor(private musicdataService:MusicdataService) { }

  ngOnInit() {

    this.musicdataService.getDetailsMusic().subscribe(data=>{
      this.musiclistSearch=data;
      this.musiclistSearch.map( el=>{
          this.musicdataService.deleteDetails(el.id);
      });
      
    });
    this.musicdataService.getDetailsMusicTrend().subscribe(data=>{
      this.musiclistTrend=data;
      this.musiclistTrend.map( el=>{
        this.musicdataService.deleteDetailsTrend(el.id);
  });
});

this.musicdataService.getFavDetailsMusicTrend().subscribe(data=>{
  this.musiclistFavTrend=data;
  this.musiclistFavTrend.map( el=>{
      this.musicdataService.deleteFavDetailsTrend(el.id);
  });
  
});
this.musicdataService.geFavtDetailsMusic().subscribe(data=>{
  this.musiclistFavSearch=data;
  this.musiclistFavSearch.map( el=>{
      this.musicdataService.deleteFavDetails(el.id);
  });
  
});

}
addToFavFromTrend(music){
  this.musicdataService.setFavouriteMusicTrends(music);
}
addToFavFromSearch(music){
  this.musicdataService.setFavouriteMusic(music);
}
removeFromFavSearch(music){
  this.musicdataService.remove(music.id);
}
removeFromFavTrend(music){
  this.musicdataService.removeTrend(music.id);
}
}
