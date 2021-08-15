import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, PreloadingStrategy } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public token: String = "";

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
      xhr.open("POST", "https://accounts.spotify.com/api/token", true);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      //xhr.setRequestHeader('Authorization', 'Basic ' + btoa("43f0b1ff8c84477f8fb66ee5a2ead3cb:76e41628aeab4c99a44f6dd15dfadff9"));


      xhr.onreadystatechange = function () {
        let data = JSON.parse(xhr.response);
        let token = data.access_token;

        console.log(data);
      };

      xhr.send(body);
    });
  }

  getArtists(): String[]{
    const artists = {
      "items": [
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/1McMsnEElThX1knmY4oliG"
          },
          "followers": {
            "href": null,
            "total": 6173134
          },
          "genres": [
            "pop"
          ],
          "href": "https://api.spotify.com/v1/artists/1McMsnEElThX1knmY4oliG",
          "id": "1McMsnEElThX1knmY4oliG",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab6761610000e5eb8885ead433869bbbe56dd2da",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/ab676161000051748885ead433869bbbe56dd2da",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/ab6761610000f1788885ead433869bbbe56dd2da",
              "width": 160
            }
          ],
          "name": "Olivia Rodrigo",
          "popularity": 98,
          "type": "artist",
          "uri": "spotify:artist:1McMsnEElThX1knmY4oliG"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/6eUKZXaKkcviH0Ku9w2n3V"
          },
          "followers": {
            "href": null,
            "total": 83207534
          },
          "genres": [
            "pop",
            "uk pop"
          ],
          "href": "https://api.spotify.com/v1/artists/6eUKZXaKkcviH0Ku9w2n3V",
          "id": "6eUKZXaKkcviH0Ku9w2n3V",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab6761610000e5eb12a2ef08d00dd7451a6dbed6",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/ab6761610000517412a2ef08d00dd7451a6dbed6",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/ab6761610000f17812a2ef08d00dd7451a6dbed6",
              "width": 160
            }
          ],
          "name": "Ed Sheeran",
          "popularity": 95,
          "type": "artist",
          "uri": "spotify:artist:6eUKZXaKkcviH0Ku9w2n3V"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/0L8ExT028jH3ddEcZwqJJ5"
          },
          "followers": {
            "href": null,
            "total": 16461591
          },
          "genres": [
            "alternative rock",
            "funk metal",
            "funk rock",
            "permanent wave"
          ],
          "href": "https://api.spotify.com/v1/artists/0L8ExT028jH3ddEcZwqJJ5",
          "id": "0L8ExT028jH3ddEcZwqJJ5",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab6761610000e5eb5815bab04d87f264f06c8939",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/ab676161000051745815bab04d87f264f06c8939",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/ab6761610000f1785815bab04d87f264f06c8939",
              "width": 160
            }
          ],
          "name": "Red Hot Chili Peppers",
          "popularity": 86,
          "type": "artist",
          "uri": "spotify:artist:0L8ExT028jH3ddEcZwqJJ5"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/04gDigrS5kc9YWfZHwBETP"
          },
          "followers": {
            "href": null,
            "total": 32229592
          },
          "genres": [
            "pop",
            "pop rock"
          ],
          "href": "https://api.spotify.com/v1/artists/04gDigrS5kc9YWfZHwBETP",
          "id": "04gDigrS5kc9YWfZHwBETP",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab6761610000e5eb288ac05481cedc5bddb5b11b",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/ab67616100005174288ac05481cedc5bddb5b11b",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/ab6761610000f178288ac05481cedc5bddb5b11b",
              "width": 160
            }
          ],
          "name": "Maroon 5",
          "popularity": 91,
          "type": "artist",
          "uri": "spotify:artist:04gDigrS5kc9YWfZHwBETP"
        },
        {
          "external_urls": {
            "spotify": "https://open.spotify.com/artist/4phGZZrJZRo4ElhRtViYdl"
          },
          "followers": {
            "href": null,
            "total": 6162503
          },
          "genres": [
            "acoustic pop",
            "neo mellow",
            "pop",
            "pop rock"
          ],
          "href": "https://api.spotify.com/v1/artists/4phGZZrJZRo4ElhRtViYdl",
          "id": "4phGZZrJZRo4ElhRtViYdl",
          "images": [
            {
              "height": 640,
              "url": "https://i.scdn.co/image/ab6761610000e5ebce8d5be6690c6964069ab8e0",
              "width": 640
            },
            {
              "height": 320,
              "url": "https://i.scdn.co/image/ab67616100005174ce8d5be6690c6964069ab8e0",
              "width": 320
            },
            {
              "height": 160,
              "url": "https://i.scdn.co/image/ab6761610000f178ce8d5be6690c6964069ab8e0",
              "width": 160
            }
          ],
          "name": "Jason Mraz",
          "popularity": 79,
          "type": "artist",
          "uri": "spotify:artist:4phGZZrJZRo4ElhRtViYdl"
        }
      ],
      "total": 44,
      "limit": 5,
      "offset": 0,
      "href": "https://api.spotify.com/v1/me/top/artists?limit=5&offset=0",
      "previous": null,
      "next": "https://api.spotify.com/v1/me/top/artists?limit=5&offset=5"
    }

    let artists_ids: String[] = [];
    artists.items.forEach(artist => {
      artists_ids.push(artist.id);
    });

    return artists_ids;
  }

  getTracks(artists_ids: String[], emotion: String): String[]{
    const tracks = {
      "tracks": [
        {
          "album": {
            "album_type": "SINGLE",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/2kRfqPViCqYdSGhYSM9R0Q"
                },
                "href": "https://api.spotify.com/v1/artists/2kRfqPViCqYdSGhYSM9R0Q",
                "id": "2kRfqPViCqYdSGhYSM9R0Q",
                "name": "Madison Beer",
                "type": "artist",
                "uri": "spotify:artist:2kRfqPViCqYdSGhYSM9R0Q"
              },
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4DdkRBBYG6Yk9Ka8tdJ9BW"
                },
                "href": "https://api.spotify.com/v1/artists/4DdkRBBYG6Yk9Ka8tdJ9BW",
                "id": "4DdkRBBYG6Yk9Ka8tdJ9BW",
                "name": "Offset",
                "type": "artist",
                "uri": "spotify:artist:4DdkRBBYG6Yk9Ka8tdJ9BW"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4FAW4D50oWaQ3EoRcsJduh"
            },
            "href": "https://api.spotify.com/v1/albums/4FAW4D50oWaQ3EoRcsJduh",
            "id": "4FAW4D50oWaQ3EoRcsJduh",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27362866f0eb635492c8915a746",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0262866f0eb635492c8915a746",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485162866f0eb635492c8915a746",
                "width": 64
              }
            ],
            "name": "Hurts Like Hell (feat. Offset)",
            "release_date": "2018-11-09",
            "release_date_precision": "day",
            "total_tracks": 1,
            "type": "album",
            "uri": "spotify:album:4FAW4D50oWaQ3EoRcsJduh"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2kRfqPViCqYdSGhYSM9R0Q"
              },
              "href": "https://api.spotify.com/v1/artists/2kRfqPViCqYdSGhYSM9R0Q",
              "id": "2kRfqPViCqYdSGhYSM9R0Q",
              "name": "Madison Beer",
              "type": "artist",
              "uri": "spotify:artist:2kRfqPViCqYdSGhYSM9R0Q"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4DdkRBBYG6Yk9Ka8tdJ9BW"
              },
              "href": "https://api.spotify.com/v1/artists/4DdkRBBYG6Yk9Ka8tdJ9BW",
              "id": "4DdkRBBYG6Yk9Ka8tdJ9BW",
              "name": "Offset",
              "type": "artist",
              "uri": "spotify:artist:4DdkRBBYG6Yk9Ka8tdJ9BW"
            }
          ],
          "disc_number": 1,
          "duration_ms": 207108,
          "explicit": true,
          "external_ids": {
            "isrc": "UKELY1800123"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3WefHNGtjexZvi66ZEx9u4"
          },
          "href": "https://api.spotify.com/v1/tracks/3WefHNGtjexZvi66ZEx9u4",
          "id": "3WefHNGtjexZvi66ZEx9u4",
          "is_local": false,
          "is_playable": true,
          "name": "Hurts Like Hell (feat. Offset)",
          "popularity": 67,
          "preview_url": "https://p.scdn.co/mp3-preview/709c7fd9ba3d3422d3c77ff9b70029746b7d9233?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:3WefHNGtjexZvi66ZEx9u4"
        },
        {
          "album": {
            "album_type": "ALBUM",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/30e8DmahrEamvLbFRPdWmk"
                },
                "href": "https://api.spotify.com/v1/artists/30e8DmahrEamvLbFRPdWmk",
                "id": "30e8DmahrEamvLbFRPdWmk",
                "name": "Justin Moore",
                "type": "artist",
                "uri": "spotify:artist:30e8DmahrEamvLbFRPdWmk"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/0S5QmbBEftEpSgPd9uYgQv"
            },
            "href": "https://api.spotify.com/v1/albums/0S5QmbBEftEpSgPd9uYgQv",
            "id": "0S5QmbBEftEpSgPd9uYgQv",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273b68f40b187d6d26914cad8ee",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02b68f40b187d6d26914cad8ee",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851b68f40b187d6d26914cad8ee",
                "width": 64
              }
            ],
            "name": "Kinda Don't Care",
            "release_date": "2016-01-01",
            "release_date_precision": "day",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:0S5QmbBEftEpSgPd9uYgQv"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/30e8DmahrEamvLbFRPdWmk"
              },
              "href": "https://api.spotify.com/v1/artists/30e8DmahrEamvLbFRPdWmk",
              "id": "30e8DmahrEamvLbFRPdWmk",
              "name": "Justin Moore",
              "type": "artist",
              "uri": "spotify:artist:30e8DmahrEamvLbFRPdWmk"
            }
          ],
          "disc_number": 1,
          "duration_ms": 261800,
          "explicit": false,
          "external_ids": {
            "isrc": "USLXJ1602466"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/5XQv5uep3VmhEuDWeFwRep"
          },
          "href": "https://api.spotify.com/v1/tracks/5XQv5uep3VmhEuDWeFwRep",
          "id": "5XQv5uep3VmhEuDWeFwRep",
          "is_local": false,
          "is_playable": true,
          "name": "Kinda Don't Care",
          "popularity": 56,
          "preview_url": "https://p.scdn.co/mp3-preview/f94aeb38b9fba835bb66ca12b44b4eda6fc51b12?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track_number": 3,
          "type": "track",
          "uri": "spotify:track:5XQv5uep3VmhEuDWeFwRep"
        },
        {
          "album": {
            "album_type": "ALBUM",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/2dyeCWctcFRt3Pha76ONgb"
                },
                "href": "https://api.spotify.com/v1/artists/2dyeCWctcFRt3Pha76ONgb",
                "id": "2dyeCWctcFRt3Pha76ONgb",
                "name": "Hank Williams, Jr.",
                "type": "artist",
                "uri": "spotify:artist:2dyeCWctcFRt3Pha76ONgb"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/7knXXEOg8XqVxRkhbh7n8V"
            },
            "href": "https://api.spotify.com/v1/albums/7knXXEOg8XqVxRkhbh7n8V",
            "id": "7knXXEOg8XqVxRkhbh7n8V",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273c6a1182c62b2b3449c57e4bb",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02c6a1182c62b2b3449c57e4bb",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851c6a1182c62b2b3449c57e4bb",
                "width": 64
              }
            ],
            "name": "Rowdy",
            "release_date": "1981",
            "release_date_precision": "year",
            "total_tracks": 10,
            "type": "album",
            "uri": "spotify:album:7knXXEOg8XqVxRkhbh7n8V"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2dyeCWctcFRt3Pha76ONgb"
              },
              "href": "https://api.spotify.com/v1/artists/2dyeCWctcFRt3Pha76ONgb",
              "id": "2dyeCWctcFRt3Pha76ONgb",
              "name": "Hank Williams, Jr.",
              "type": "artist",
              "uri": "spotify:artist:2dyeCWctcFRt3Pha76ONgb"
            }
          ],
          "disc_number": 1,
          "duration_ms": 156106,
          "explicit": false,
          "external_ids": {
            "isrc": "USCRB9900140"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2IHWabwhSEdpB5XEhaz9zx"
          },
          "href": "https://api.spotify.com/v1/tracks/2IHWabwhSEdpB5XEhaz9zx",
          "id": "2IHWabwhSEdpB5XEhaz9zx",
          "is_local": false,
          "is_playable": true,
          "name": "Dixie On My Mind",
          "popularity": 40,
          "preview_url": "https://p.scdn.co/mp3-preview/143b626f780eeaabcdce787b44d884aa649e010b?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:2IHWabwhSEdpB5XEhaz9zx"
        },
        {
          "album": {
            "album_type": "ALBUM",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4TONBKcqVR1LmPdfJxvkMU"
                },
                "href": "https://api.spotify.com/v1/artists/4TONBKcqVR1LmPdfJxvkMU",
                "id": "4TONBKcqVR1LmPdfJxvkMU",
                "name": "Eric Paslay",
                "type": "artist",
                "uri": "spotify:artist:4TONBKcqVR1LmPdfJxvkMU"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/79RwxrHw6uKVimeEGyM00W"
            },
            "href": "https://api.spotify.com/v1/albums/79RwxrHw6uKVimeEGyM00W",
            "id": "79RwxrHw6uKVimeEGyM00W",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273fd2875075d1ebe88211ae9b2",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02fd2875075d1ebe88211ae9b2",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851fd2875075d1ebe88211ae9b2",
                "width": 64
              }
            ],
            "name": "Eric Paslay",
            "release_date": "2014-01-01",
            "release_date_precision": "day",
            "total_tracks": 11,
            "type": "album",
            "uri": "spotify:album:79RwxrHw6uKVimeEGyM00W"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4TONBKcqVR1LmPdfJxvkMU"
              },
              "href": "https://api.spotify.com/v1/artists/4TONBKcqVR1LmPdfJxvkMU",
              "id": "4TONBKcqVR1LmPdfJxvkMU",
              "name": "Eric Paslay",
              "type": "artist",
              "uri": "spotify:artist:4TONBKcqVR1LmPdfJxvkMU"
            }
          ],
          "disc_number": 1,
          "duration_ms": 167213,
          "explicit": false,
          "external_ids": {
            "isrc": "USCN11300085"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/66rVt7PbwyKlu6CK6rxyAi"
          },
          "href": "https://api.spotify.com/v1/tracks/66rVt7PbwyKlu6CK6rxyAi",
          "id": "66rVt7PbwyKlu6CK6rxyAi",
          "is_local": false,
          "is_playable": true,
          "name": "Friday Night",
          "popularity": 63,
          "preview_url": "https://p.scdn.co/mp3-preview/0cb380c74011788de04c83952535fe97b10015de?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track_number": 2,
          "type": "track",
          "uri": "spotify:track:66rVt7PbwyKlu6CK6rxyAi"
        },
        {
          "album": {
            "album_type": "ALBUM",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/2mV8aJphiSHYJf43DxL7Gt"
                },
                "href": "https://api.spotify.com/v1/artists/2mV8aJphiSHYJf43DxL7Gt",
                "id": "2mV8aJphiSHYJf43DxL7Gt",
                "name": "Chromeo",
                "type": "artist",
                "uri": "spotify:artist:2mV8aJphiSHYJf43DxL7Gt"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/0U78mbujuFjpprS0G9QcTx"
            },
            "href": "https://api.spotify.com/v1/albums/0U78mbujuFjpprS0G9QcTx",
            "id": "0U78mbujuFjpprS0G9QcTx",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ea9dc98a9ae5397ee3d6fb5a",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ea9dc98a9ae5397ee3d6fb5a",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851ea9dc98a9ae5397ee3d6fb5a",
                "width": 64
              }
            ],
            "name": "White Women",
            "release_date": "2014-05-07",
            "release_date_precision": "day",
            "total_tracks": 12,
            "type": "album",
            "uri": "spotify:album:0U78mbujuFjpprS0G9QcTx"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2mV8aJphiSHYJf43DxL7Gt"
              },
              "href": "https://api.spotify.com/v1/artists/2mV8aJphiSHYJf43DxL7Gt",
              "id": "2mV8aJphiSHYJf43DxL7Gt",
              "name": "Chromeo",
              "type": "artist",
              "uri": "spotify:artist:2mV8aJphiSHYJf43DxL7Gt"
            },
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/6O4EGCCb6DoIiR6B1QCQgp"
              },
              "href": "https://api.spotify.com/v1/artists/6O4EGCCb6DoIiR6B1QCQgp",
              "id": "6O4EGCCb6DoIiR6B1QCQgp",
              "name": "Toro y Moi",
              "type": "artist",
              "uri": "spotify:artist:6O4EGCCb6DoIiR6B1QCQgp"
            }
          ],
          "disc_number": 1,
          "duration_ms": 238478,
          "explicit": false,
          "external_ids": {
            "isrc": "GBAYE1349980"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6kbRL1WkHrKxHsBrV3ComC"
          },
          "href": "https://api.spotify.com/v1/tracks/6kbRL1WkHrKxHsBrV3ComC",
          "id": "6kbRL1WkHrKxHsBrV3ComC",
          "is_local": false,
          "is_playable": true,
          "name": "Come Alive (feat. Toro y Moi)",
          "popularity": 39,
          "preview_url": "https://p.scdn.co/mp3-preview/2f60a4d968fe6837fd6007c95cb0b664bccd4b0c?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track_number": 2,
          "type": "track",
          "uri": "spotify:track:6kbRL1WkHrKxHsBrV3ComC"
        },
        {
          "album": {
            "album_type": "ALBUM",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/7vCtweS8UVAXTyau2j0rDT"
                },
                "href": "https://api.spotify.com/v1/artists/7vCtweS8UVAXTyau2j0rDT",
                "id": "7vCtweS8UVAXTyau2j0rDT",
                "name": "Josh Turner",
                "type": "artist",
                "uri": "spotify:artist:7vCtweS8UVAXTyau2j0rDT"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4AwUix40p2isD6wvEBPpQ8"
            },
            "href": "https://api.spotify.com/v1/albums/4AwUix40p2isD6wvEBPpQ8",
            "id": "4AwUix40p2isD6wvEBPpQ8",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2733bcc42fdc5fd354a3e58a03c",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e023bcc42fdc5fd354a3e58a03c",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048513bcc42fdc5fd354a3e58a03c",
                "width": 64
              }
            ],
            "name": "Haywire",
            "release_date": "2010",
            "release_date_precision": "year",
            "total_tracks": 11,
            "type": "album",
            "uri": "spotify:album:4AwUix40p2isD6wvEBPpQ8"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/7vCtweS8UVAXTyau2j0rDT"
              },
              "href": "https://api.spotify.com/v1/artists/7vCtweS8UVAXTyau2j0rDT",
              "id": "7vCtweS8UVAXTyau2j0rDT",
              "name": "Josh Turner",
              "type": "artist",
              "uri": "spotify:artist:7vCtweS8UVAXTyau2j0rDT"
            }
          ],
          "disc_number": 1,
          "duration_ms": 192800,
          "explicit": false,
          "external_ids": {
            "isrc": "USUM70979834"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2p07VcUwRZ5sru3mJ0JogS"
          },
          "href": "https://api.spotify.com/v1/tracks/2p07VcUwRZ5sru3mJ0JogS",
          "id": "2p07VcUwRZ5sru3mJ0JogS",
          "is_local": false,
          "is_playable": true,
          "name": "Why Don't We Just Dance",
          "popularity": 67,
          "preview_url": "https://p.scdn.co/mp3-preview/0ed0e3c323e47701f6aa90538da357c3e083539f?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:2p07VcUwRZ5sru3mJ0JogS"
        },
        {
          "album": {
            "album_type": "ALBUM",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4Ge8xMJNwt6EEXOzVXju9a"
                },
                "href": "https://api.spotify.com/v1/artists/4Ge8xMJNwt6EEXOzVXju9a",
                "id": "4Ge8xMJNwt6EEXOzVXju9a",
                "name": "Caroline Polachek",
                "type": "artist",
                "uri": "spotify:artist:4Ge8xMJNwt6EEXOzVXju9a"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4ClyeVlAKJJViIyfVW0yQD"
            },
            "href": "https://api.spotify.com/v1/albums/4ClyeVlAKJJViIyfVW0yQD",
            "id": "4ClyeVlAKJJViIyfVW0yQD",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2737d983e7bf67c2806218c2759",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e027d983e7bf67c2806218c2759",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048517d983e7bf67c2806218c2759",
                "width": 64
              }
            ],
            "name": "Pang",
            "release_date": "2019-10-18",
            "release_date_precision": "day",
            "total_tracks": 14,
            "type": "album",
            "uri": "spotify:album:4ClyeVlAKJJViIyfVW0yQD"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4Ge8xMJNwt6EEXOzVXju9a"
              },
              "href": "https://api.spotify.com/v1/artists/4Ge8xMJNwt6EEXOzVXju9a",
              "id": "4Ge8xMJNwt6EEXOzVXju9a",
              "name": "Caroline Polachek",
              "type": "artist",
              "uri": "spotify:artist:4Ge8xMJNwt6EEXOzVXju9a"
            }
          ],
          "disc_number": 1,
          "duration_ms": 183861,
          "explicit": false,
          "external_ids": {
            "isrc": "USSM11902945"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/5B6Kjha6RRIMWGN7zGsAaT"
          },
          "href": "https://api.spotify.com/v1/tracks/5B6Kjha6RRIMWGN7zGsAaT",
          "id": "5B6Kjha6RRIMWGN7zGsAaT",
          "is_local": false,
          "is_playable": true,
          "name": "So Hot You're Hurting My Feelings",
          "popularity": 64,
          "preview_url": "https://p.scdn.co/mp3-preview/3d6cbd1cd1ef26a8865acfc034b836740e46df66?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track_number": 12,
          "type": "track",
          "uri": "spotify:track:5B6Kjha6RRIMWGN7zGsAaT"
        },
        {
          "album": {
            "album_type": "ALBUM",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/2M4Yt7oKGoYd0wqU44k4i2"
                },
                "href": "https://api.spotify.com/v1/artists/2M4Yt7oKGoYd0wqU44k4i2",
                "id": "2M4Yt7oKGoYd0wqU44k4i2",
                "name": "Travis Tritt",
                "type": "artist",
                "uri": "spotify:artist:2M4Yt7oKGoYd0wqU44k4i2"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/3DcqxxwxranqrA4zTGmzmo"
            },
            "href": "https://api.spotify.com/v1/albums/3DcqxxwxranqrA4zTGmzmo",
            "id": "3DcqxxwxranqrA4zTGmzmo",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b273ec1050dcd581e8deb71d16ea",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ec1050dcd581e8deb71d16ea",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d00004851ec1050dcd581e8deb71d16ea",
                "width": 64
              }
            ],
            "name": "Country Club",
            "release_date": "1990",
            "release_date_precision": "year",
            "total_tracks": 10,
            "type": "album",
            "uri": "spotify:album:3DcqxxwxranqrA4zTGmzmo"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/2M4Yt7oKGoYd0wqU44k4i2"
              },
              "href": "https://api.spotify.com/v1/artists/2M4Yt7oKGoYd0wqU44k4i2",
              "id": "2M4Yt7oKGoYd0wqU44k4i2",
              "name": "Travis Tritt",
              "type": "artist",
              "uri": "spotify:artist:2M4Yt7oKGoYd0wqU44k4i2"
            }
          ],
          "disc_number": 1,
          "duration_ms": 190800,
          "explicit": false,
          "external_ids": {
            "isrc": "USWB10902602"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6o7BCdJjGvHBBPMb4ZrA68"
          },
          "href": "https://api.spotify.com/v1/tracks/6o7BCdJjGvHBBPMb4ZrA68",
          "id": "6o7BCdJjGvHBBPMb4ZrA68",
          "is_local": false,
          "is_playable": true,
          "name": "Country Club",
          "popularity": 53,
          "preview_url": "https://p.scdn.co/mp3-preview/8744662bc48e11f90aea84068034aa2658307f08?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:6o7BCdJjGvHBBPMb4ZrA68"
        },
        {
          "album": {
            "album_type": "ALBUM",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4NHQUGzhtTLFvgF5SZesLK"
                },
                "href": "https://api.spotify.com/v1/artists/4NHQUGzhtTLFvgF5SZesLK",
                "id": "4NHQUGzhtTLFvgF5SZesLK",
                "name": "Tove Lo",
                "type": "artist",
                "uri": "spotify:artist:4NHQUGzhtTLFvgF5SZesLK"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/6jggnLM3SdDnjQ3GWmIZ4L"
            },
            "href": "https://api.spotify.com/v1/albums/6jggnLM3SdDnjQ3GWmIZ4L",
            "id": "6jggnLM3SdDnjQ3GWmIZ4L",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2735a032c46b63b202e76ebaffe",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e025a032c46b63b202e76ebaffe",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048515a032c46b63b202e76ebaffe",
                "width": 64
              }
            ],
            "name": "BLUE LIPS (lady wood phase II)",
            "release_date": "2017-11-17",
            "release_date_precision": "day",
            "total_tracks": 14,
            "type": "album",
            "uri": "spotify:album:6jggnLM3SdDnjQ3GWmIZ4L"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4NHQUGzhtTLFvgF5SZesLK"
              },
              "href": "https://api.spotify.com/v1/artists/4NHQUGzhtTLFvgF5SZesLK",
              "id": "4NHQUGzhtTLFvgF5SZesLK",
              "name": "Tove Lo",
              "type": "artist",
              "uri": "spotify:artist:4NHQUGzhtTLFvgF5SZesLK"
            }
          ],
          "disc_number": 1,
          "duration_ms": 137219,
          "explicit": true,
          "external_ids": {
            "isrc": "SEUM71601694"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2FtyrwcRqA2JQEezLjPZ8r"
          },
          "href": "https://api.spotify.com/v1/tracks/2FtyrwcRqA2JQEezLjPZ8r",
          "id": "2FtyrwcRqA2JQEezLjPZ8r",
          "is_local": false,
          "is_playable": true,
          "name": "bitches",
          "popularity": 50,
          "preview_url": "https://p.scdn.co/mp3-preview/0f374c88b5e8877914f5e1824c6c0c4d485a7747?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track_number": 7,
          "type": "track",
          "uri": "spotify:track:2FtyrwcRqA2JQEezLjPZ8r"
        },
        {
          "album": {
            "album_type": "ALBUM",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4YLtscXsxbVgi031ovDDdh"
                },
                "href": "https://api.spotify.com/v1/artists/4YLtscXsxbVgi031ovDDdh",
                "id": "4YLtscXsxbVgi031ovDDdh",
                "name": "Chris Stapleton",
                "type": "artist",
                "uri": "spotify:artist:4YLtscXsxbVgi031ovDDdh"
              }
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/24fkX2Gdqw4a6pR9BUYbE5"
            },
            "href": "https://api.spotify.com/v1/albums/24fkX2Gdqw4a6pR9BUYbE5",
            "id": "24fkX2Gdqw4a6pR9BUYbE5",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b27303c4f794113255be4038e45d",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e0203c4f794113255be4038e45d",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d0000485103c4f794113255be4038e45d",
                "width": 64
              }
            ],
            "name": "From A Room: Volume 2",
            "release_date": "2017-12-01",
            "release_date_precision": "day",
            "total_tracks": 9,
            "type": "album",
            "uri": "spotify:album:24fkX2Gdqw4a6pR9BUYbE5"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4YLtscXsxbVgi031ovDDdh"
              },
              "href": "https://api.spotify.com/v1/artists/4YLtscXsxbVgi031ovDDdh",
              "id": "4YLtscXsxbVgi031ovDDdh",
              "name": "Chris Stapleton",
              "type": "artist",
              "uri": "spotify:artist:4YLtscXsxbVgi031ovDDdh"
            }
          ],
          "disc_number": 1,
          "duration_ms": 200213,
          "explicit": false,
          "external_ids": {
            "isrc": "USUM71710209"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/2heBToLEB7odACQ3xwb32A"
          },
          "href": "https://api.spotify.com/v1/tracks/2heBToLEB7odACQ3xwb32A",
          "id": "2heBToLEB7odACQ3xwb32A",
          "is_local": false,
          "is_playable": true,
          "name": "Scarecrow In The Garden",
          "popularity": 58,
          "preview_url": "https://p.scdn.co/mp3-preview/e87ac5056604cf124f1c3e423938d4a191d4f970?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
          "track_number": 3,
          "type": "track",
          "uri": "spotify:track:2heBToLEB7odACQ3xwb32A"
        }
      ],
      "seeds": [
        {
          "initialPoolSize": 257,
          "afterFilteringSize": 54,
          "afterRelinkingSize": 54,
          "id": "4NHQUGzhtTLFvgF5SZesLK",
          "type": "ARTIST",
          "href": "https://api.spotify.com/v1/artists/4NHQUGzhtTLFvgF5SZesLK"
        },
        {
          "initialPoolSize": 304,
          "afterFilteringSize": 93,
          "afterRelinkingSize": 93,
          "id": "0c6xIDDpzE81m2q797ordA",
          "type": "TRACK",
          "href": "https://api.spotify.com/v1/tracks/0c6xIDDpzE81m2q797ordA"
        },
        {
          "initialPoolSize": 402,
          "afterFilteringSize": 8,
          "afterRelinkingSize": 8,
          "id": "classical",
          "type": "GENRE",
          "href": null
        },
        {
          "initialPoolSize": 390,
          "afterFilteringSize": 136,
          "afterRelinkingSize": 136,
          "id": "country",
          "type": "GENRE",
          "href": null
        }
      ]
    }

    let tracks_uri: String[] = [];
    tracks['tracks'].forEach(track => {
      tracks_uri.push(track.uri);
    })

    return tracks_uri;
  }

  getRecommendation(): void{
    const artists_ids = this.getArtists();

    const emotion = 'happy';

    const tracks = this.getTracks(artists_ids, emotion);

    tracks.forEach(track => {
      //Adicionar música à fila
    })

    /*
    this.http.get<any>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .subscribe(data => {
      console.log(data);
    });
    */
  }
}
