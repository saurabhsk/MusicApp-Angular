import { Component, OnInit } from '@angular/core';
import {MusicdataService} from '../musicdata.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  musiclist:any=[];
  musiclistrend:any=[];
  constructor(private musicdataService:MusicdataService,private router :Router) { }
  ngOnInit() {
   
       this.musicdataService.getFavouriteMusicTrends().subscribe(data=>{
         this.musiclistrend=data;});

         this.musicdataService.getFavouriteMusicFromSearch().subscribe(data=>{
           this.musiclist=data;});
}
 remove(id){
   this.musicdataService.remove(id);
    this.musiclist=this.musiclist.filter(data=> id!=data.id);
 }
removeTrend(id){
  this.musicdataService.removeTrend(id);
  this.musiclistrend=this.musiclistrend.filter(data=> id!=data.id);
}

}
