import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any [] = [];
  urlBusqueda:string = "https://api.spotify.com/v1/search";
  urlArtista:string = "https://api.spotify.com/v1/artists";

  constructor( private http:Http ) { }

  getArtistas( termino:string ){

    let headers = new Headers();
    headers.append('authorization', 'Bearer BQAsx27d6bIogq8u-ejv1AgTLSV7Hxl-LsF7QJuWmv_d1GCfiAQOi6xW3_HhO1z3Xc4u0SJOcKWN0PeyzaVag');
    let query = `?q=${ termino }&type=artist`;
    let url = this.urlBusqueda + query;

    return this.http.get( url, { headers } )
            .map( res =>{
                //console.log(res.json().artists.items);
                this.artistas = res.json().artists.items;
                console.log(this.artistas);
                //return res.json().artists.items;
            })

  }

  getArtista( id:string ){

    let query = `/${ id }`;
    let url = this.urlArtista + query;

    return this.http.get( url)
            .map( res =>{
                console.log(res.json());
                //this.artistas = res.json().artists.items;
                return res.json();
            })

  }

  getTop( id:string ){

    let query = `/${ id }/top-tracks?country=US`;
    let url = this.urlArtista + query;

    return this.http.get( url)
            .map( res =>{
                console.log(res.json().tracks);
                //this.artistas = res.json().artists.items;
                return res.json().tracks;
            })

  }

}
//https://accounts.spotify.com/api/token
//client_id: 3f2f2935f41140589cca9c443070a80e
//client_secret: a8386063ed074061bfe54cf96cbd1b8f
//grant_type: client_credentials
//BQAsx27d6bIogq8u-ejv1AgTLSV7Hxl-LsF7QJunmv_d1GCfiAQOi6xW3_HhO1z3Xc4u0SJOcKWN0PeyzaVag
