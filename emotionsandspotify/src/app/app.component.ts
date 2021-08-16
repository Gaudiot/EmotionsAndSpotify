import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, PreloadingStrategy } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map, catchError, take } from 'rxjs/operators';

interface Artist{
  name: string,
  id: string,
  uri: string
}

interface ArtistsData{
  href: string,
  items: [Artist],
  limit: number
}

interface Track{
  id: string,
  uri: string
}

interface TrackData{
  tracks: [Track]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient){};

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      if(params['code'] == undefined) return;

      let body = "grant_type=authorization_code";
      body += "&code=" + params['code'];
      body += "&redirect_uri=http://localhost:4200/";
      body += "&client_id=43f0b1ff8c84477f8fb66ee5a2ead3cb";
      body += "&client_secret=eaa1a0855474412aadc1cfe742276d1b";

      let xhr = new XMLHttpRequest();

      xhr.onload = function(){
        let data = JSON.parse(xhr.response);
        let {access_token, refresh_token} = data;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
        console.log(access_token);
      }

      xhr.open("POST", "https://accounts.spotify.com/api/token", true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      //xhr.setRequestHeader('Authorization', 'Basic ' + btoa("43f0b1ff8c84477f8fb66ee5a2ead3cb:76e41628aeab4c99a44f6dd15dfadff9"));

      xhr.send(body);
    });
  }

  getArtists():  Observable<ArtistsData>{
    return this.http.get<ArtistsData>("https://api.spotify.com/v1/me/top/artists",
    {
      params: {
        limit: 5
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    });
  }

  getTracks(artists_ids: String[], emotion: string): Observable<TrackData>{
    let min_valence: number;
    let max_valence: number;

    switch (emotion){
      case 'sad':
        min_valence = 0.0;
        max_valence = 0.4;
        break;
      case 'neutral':
        min_valence = 0.3;
        max_valence = 0.7;
        break;
      case 'happy':
        min_valence = 0.6;
        max_valence = 1.0;
        break;
      default:
        min_valence = 0.0;
        max_valence = 1.0
    }

    return this.http.get<any>("https://api.spotify.com/v1/recommendations",
    {
      params: {
        limit: 10,
        market: 'BR',
        seed_artists: artists_ids.join(),
        min_valence,
        max_valence
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    })
  }

  getRecommendation(): void{
    const emotion = 'happy';

    this.getArtists().subscribe(
      data => {
        let artists_ids: String[] = [];

        data.items.forEach(artist => {
          artists_ids.push(artist.id);
        });

        this.getTracks(artists_ids, emotion).subscribe(
          data => {
            data.tracks.forEach(track => {
              console.log("batata");
              this.http.post("https://api.spotify.com/v1/me/player/queue",{},
              {
                params: { uri: track.uri },
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
              })
            })
          }
        );
      }
    );
  }
}
