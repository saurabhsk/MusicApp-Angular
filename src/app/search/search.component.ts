import { Component, OnInit } from '@angular/core';
import { MusicdataService } from '../musicdata.service';
import { from } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private musicdataService: MusicdataService,private route:ActivatedRoute,private router:Router,private location:Location) { }
  listOfMusic:any= [];
  ngOnInit() {

    this.getMusic();
  }
  getMusic(): void{
      const search = this.route.snapshot.paramMap.get('id');
      this.musicdataService.getMusic(search).subscribe(data=>{
        console.log(data);
        this.listOfMusic = data.results.trackmatches.track;
      });
}
goBack(): void {
  this.location.back();
}
addToFavsFromSearch(music){
    this.musicdataService.setFavouriteMusicFromSearch(music);
  }
  showDetail(music){
    this.musicdataService.setDetailsMusic(music);
    this.router.navigateByUrl('/details/'+music.name);
}

}
