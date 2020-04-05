import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {flatMap, mapTo} from 'rxjs/operators';

import {ScreenNames} from '../../constants/screen-names';
import {AppleMusicAPIService} from '../../services/apple-music-api.service';
import {Album, DetailAlbum} from '../../interfaces/album.interface';

const enum ROUTE_PARAMS {
  id = 'id',
  category = 'category',
}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent implements OnInit {
  public album: Album;
  public loading: boolean;
  public relatedAlbums: Album[] = [];

  public constructor(
    private readonly _activatedroute: ActivatedRoute,
    private readonly _appleMusicAPIService: AppleMusicAPIService,
    private readonly _cdr: ChangeDetectorRef,
    private readonly _router: Router,
  ) { }

  public ngOnInit(): void {
    const albumId = this._activatedroute.snapshot.paramMap.get(ROUTE_PARAMS.id);
    const category = this._activatedroute.snapshot.paramMap.get(ROUTE_PARAMS.category);
    this.getAlbumData(category, albumId);
  }

  public getAlbumData(category: string, albumId: string): void {
    this.loading = true;
    this._appleMusicAPIService.getDetails(category, albumId).subscribe((response: DetailAlbum) => {
      this.album = response.album;
      this.relatedAlbums = response.relatedAlbums;
      this.loading = false;
      this._cdr.markForCheck();
    });
  }

  public showRelatedAlbums(): boolean {
    return this.relatedAlbums.length > 0;
  }

  public updateAlbum(category: string, albumId: string) {
    this._router.navigate([ScreenNames.Detail, category, albumId]);
    this.getAlbumData(category, albumId);
  }
}
