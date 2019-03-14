import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicdataService {

  constructor(private http:HttpClient) { }

  url:string='http://localhost:3000/posts';

  getAllMusic():any{
    return this.http.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=34c0d1d6c0886560e6fd3c2e0ebc55c2&format=json");
  }
  
  getMusic(value):any{
    var url=`http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=34c0d1d6c0886560e6fd3c2e0ebc55c2&track=${value}&format=json`;
    return this.http.get(url);
  }

  setFavouriteMusicTrends(music){
    this.http.post('http://localhost:3000/trends',{music}).subscribe();
  }
  getFavouriteMusicTrends(){
    return this.http.get('http://localhost:3000/trends');
  }
  setFavouriteMusicFromSearch(music){
    this.http.post(this.url,{music}).subscribe();
  }
   getFavouriteMusicFromSearch(){
     return this.http.get('http://localhost:3000/posts');
   }
   
  removeTrend(id){
    this.http.delete('http://localhost:3000/trends'+"/"+id).subscribe();
    }
  remove(id){
     this.http.delete(this.url+"/"+id).subscribe();
   }
   setDetailsMusicTrend(music){
    this.http.post('http://localhost:3000/trenddetails',{music}).subscribe(console.log);
}
   getDetailsMusicTrend(){
    return this.http.get('http://localhost:3000/trenddetails');
  }
  deleteDetailsTrend(data){
    this.http.delete('http://localhost:3000/trenddetails/'+data).subscribe(console.log);
}
getFavouriteMusic(){
  return this.http.get('http://localhost:3000/posts');
}
setFavouriteMusic(music){
  this.http.post(this.url,{music}).subscribe(console.log);
}
getDetailsMusic(){
  return this.http.get('http://localhost:3000/details');
}
setDetailsMusic(music){
  this.http.post('http://localhost:3000/details',{music}).subscribe(console.log);
}
deleteDetails(data){
  this.http.delete('http://localhost:3000/details/'+data).subscribe(console.log);
}
getFavDetailsMusicTrend(){
  return this.http.get('http://localhost:3000/trenddetailsfav');
}
setFavDetailsMusicTrend(music){
  this.http.post('http://localhost:3000/trenddetailsfav',{music}).subscribe(console.log);
}
deleteFavDetailsTrend(data){
  this.http.delete('http://localhost:3000/trenddetailsfav/'+data).subscribe(console.log);
}
geFavtDetailsMusic(){
  return this.http.get('http://localhost:3000/detailsfav');
}
setFavDetailsMusic(music){
  this.http.post('http://localhost:3000/detailsfav',{music}).subscribe(console.log);
}
deleteFavDetails(data){
  this.http.delete('http://localhost:3000/detailsfav/'+data).subscribe(console.log);
}
  
  

}
