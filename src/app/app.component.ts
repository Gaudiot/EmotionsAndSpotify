import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, PreloadingStrategy } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse ,} from '@angular/common/http';
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

interface EmotionResponse{
   0: FaceParameters
}

interface FaceParameters{
  faceAttributes: FaceAttributes,
  faceRectangle: any
}

interface FaceAttributes{
  emotion:Emotion
}

interface Emotion{
  anger: number,
  contempt: number,
  disgust: number,
  fear: number,
  happiness: number,
  neutral: number,
  sadness: number,
  surprise: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public files: any[];
  public emotion: string = "none";
  public imgURLd: string = "";
  public img:any;

  constructor(private route: ActivatedRoute, private http: HttpClient){
    this.files = [];
  };

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

  login(){
    window.location.href = "https://accounts.spotify.com/authorize?client_id=43f0b1ff8c84477f8fb66ee5a2ead3cb&scope=user-top-read user-modify-playback-state&response_type=code&redirect_uri=http://localhost:4200/";
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

  getTracks(artists_ids: String[]): Observable<TrackData>{
    let min_valence: number;
    let max_valence: number;
    let min_energy: number;
    let max_energy: number;

    switch (this.emotion){
      case 'sad':
        min_valence = 0.0;
        max_valence = 0.4;
        min_energy = 0.0
        max_energy = 0.6
        break;
      case 'neutral':
        min_valence = 0.3;
        max_valence = 0.7;
        min_energy = 0.3;
        max_energy = 0.7;
        break;
      case 'happy':
        min_valence = 0.6;
        max_valence = 1.0;
        min_energy = 0.5
        max_energy = 1.0
        break;
      case 'angry':
        min_valence = 0.0;
        max_valence = 0.6;
        min_energy = 0.5
        max_energy = 1.0
        break;
      case 'surprised':
        min_valence = 0.6;
        max_valence = 1.0;
        min_energy = 0.0
        max_energy = 0.5
        break;
      case 'afraid':
        min_valence = 0.0;
        max_valence = 0.6;
        min_energy = 0.0
        max_energy = 0.5
        break;        
      default:
        min_valence = 0.0;
        max_valence = 1.0
        min_energy = 0.0
        max_energy = 1.0
    }

    return this.http.get<any>("https://api.spotify.com/v1/recommendations",
    {
      params: {
        limit: 10,
        market: 'BR',
        seed_artists: artists_ids.join(),
        min_valence,
        max_valence,
        min_energy,
        max_energy
      },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    })
  }

  getRecommendation(): void{

    this.getArtists().subscribe(
      data => {
        let artists_ids: String[] = [];

        data.items.forEach(artist => {
          artists_ids.push(artist.id);
        });

        this.getTracks(artists_ids).subscribe(
          data => {
            data.tracks.forEach(track => {
              //console.log("batata", track.uri)
              this.http.post("https://api.spotify.com/v1/me/player/queue",{},
              {
                params: { uri: track.uri },
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
              }).subscribe();
            });
          }
        );
      }
    );
  }

  /**imgof(img:any){
    this.img = img;
  }

  toBase64(result:any){
    var data = result.split(',')[1];
    var mimeType = result.split(';')[0].slice(5)

    var bytes = window.atob(data);
    var buf = new ArrayBuffer(bytes.length);
    var byteArr = new Uint8Array(buf);

    for (var i = 0; i < bytes.length; i++) {
        byteArr[i] = bytes.charCodeAt(i);
    }
     
    this.UploadImg(byteArr);
  }*/

  onFileChanged(event: any) {
    this.files = event.target.files;
    console.log(this.files[0].name);
    const reader = new FileReader();
    reader.readAsDataURL(this.files[0]);
    //reader.onload = () => this.toBase64(reader.result);
  }

  /*getEmotions2(image:any): Observable<EmotionResponse>{
    const headers = new HttpHeaders({
      'Content-Type' : "application/octet-stream" ,
      'Ocp-Apim-Subscription-Key': '9d5a3f69cd914642b00ae36620ea534e',
    })

    return this.http.post<EmotionResponse>('https://brazilsouth.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=emotion',
      {image},{headers: headers})
      .pipe(
        retry(1)
      );
  }

  UploadImg(image:any) {
    //const formData = new FormData();
    //var image = this.files[0]
    //for (const file of this.files) {
    //    formData.append("imagem", file, file.name);
    //}
    this.getEmotions2(image).subscribe(data => {
      const emotions = data[0].faceAttributes.emotion

      let array = [emotions.anger,emotions.contempt,emotions.disgust,emotions.fear,
                    emotions.happiness, emotions.neutral, emotions.sadness, emotions.surprise];
      let nomes = ["raiva", "desprezo", "desgosto", "medo", "felicidade", "neutral","tristeza", "surpresa"]
      let emocoes = nomes.map(function(e,i){
        return [e,array[i]]
      });
      console.log(emocoes);
      if(emotions.sadness > emotions.happiness && emotions.neutral){
        this.emotion = "sad"
      }else if(emotions.happiness > emotions.neutral){
        this.emotion = "happy"
      }
      else if(){
        this.emotion = "angry"
      }
      else if(){
        this.emotion = "afraid"
      }
      else if(){
        this.emotion = "surprised"
      }
      else {
        this.emotion = "neutral"
      }
    });
  }**/

  getEmotions(imgURL: string): Observable<EmotionResponse>{
    const headers = new HttpHeaders({
      'Content-Type' : "application/json" ,
      'Ocp-Apim-Subscription-Key': '9d5a3f69cd914642b00ae36620ea534e',
    })

    return this.http.post<EmotionResponse>('https://brazilsouth.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceAttributes=emotion',
      {url: imgURL},{headers: headers})
      .pipe(
        retry(1)
      );
  }

  parseEmotions(imgUrl: string){
    this.getEmotions(imgUrl).subscribe(
      data => {
        const emotions = data[0].faceAttributes.emotion

        let array = [emotions.anger,emotions.contempt,emotions.disgust,emotions.fear,
                      emotions.happiness, emotions.neutral, emotions.sadness, emotions.surprise];
        let nomes = ["raiva", "desprezo", "desgosto", "medo", "felicidade", "neutral","tristeza", "surpresa"]
        let emocoes = nomes.map(function(e,i){
          return [e,array[i]]
        });
        console.log(emocoes);
        if(emotions.sadness > 0.5){
          this.emotion = "sad"
        }else if(emotions.happiness > 0.5){
          this.emotion = "happy"
        }
        else if(emotions.anger > 0.5){
          this.emotion = "angry"
        }
        else if(emotions.fear > 0.5){
          this.emotion = "afraid"
        }
        else if(emotions.surprise > 0.5){
          this.emotion = "surprised"
        }
        else {
          this.emotion = "neutral"
        }
      });
  }
}