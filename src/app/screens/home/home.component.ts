import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AppleMusicAPIService} from '../../services/apple-music-api.service';
import {ScreenNames} from '../../constants/screen-names';
import {Album} from '../../interfaces/album.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public albums: Album[];
  public loading: boolean;
  public searchText: string;

  public constructor(
    private readonly _appleMusicAPIService: AppleMusicAPIService,
    private readonly _cdr: ChangeDetectorRef,
    private readonly _router: Router,
    ) { }

  public ngOnInit() {
    this.loading = true;
    this._appleMusicAPIService.getAlbums().subscribe((data: Album[]) => {
      this.albums = data;
      this.loading = false;
      this._cdr.markForCheck();
    });
  }

  public goToDetail(album: Album) {
    this._router.navigate([ScreenNames.Detail, album.category, album.id]);
  }

}
