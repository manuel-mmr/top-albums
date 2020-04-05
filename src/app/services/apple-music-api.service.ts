import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, forkJoin} from 'rxjs';
import {map, find, filter} from 'rxjs/operators';

import {environment} from '../../environments/environment';
import {Album, AlbumAPIData, AlbumsAPIData, DetailAlbum } from '../interfaces/album.interface';

@Injectable({
  providedIn: 'root',
})
export class AppleMusicAPIService {
  private _albums: Observable<Album[]>;

  public constructor(private readonly _http: HttpClient) {}

  public getAlbums(): Observable<Album[]> {
    if (!this._albums) {
      this._albums = this._http.get(environment.server).pipe(map((data: AlbumsAPIData) => {
        const albumsData = [];
        data.feed.entry.forEach((album: AlbumAPIData) => {
          albumsData.push({
            artist: album['im:artist'].label,
            category: album.category.attributes.term,
            id: album.id.attributes['im:id'],
            image: album['im:image'][2].label,
            name: album['im:name'].label,
            numberOfSongs: album['im:itemCount'].label,
            releaseDate: album['im:releaseDate'].label,
            rights: album.rights.label,
            price: album['im:price'].attributes,
            title: album.title.label,
          });
        });
        return albumsData;
      }));
    }

    return this._albums;
  }

  public getDetails(category: string, id: string): Observable<DetailAlbum> {
    return forkJoin({
      album: this._getAlbumDetail(id),
      relatedAlbums: this._getRelatedAlbums(category, id),
    });
  }

  private _getAlbumDetail(id: string): Observable<Album> {
    return this.getAlbums().pipe(
      map(albums => albums.find(album => album.id === id))
    );
  }

  private _getRelatedAlbums(category: string, id: string): Observable<Album[]> {
    return this.getAlbums().pipe(
      map(albums => albums.filter((album, index) => {
        return (album.category === category && album.id !== id);
      })),
    );
  }
}

