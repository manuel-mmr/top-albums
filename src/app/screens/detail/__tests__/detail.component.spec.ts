import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {Router} from '@angular/router';
import {of} from 'rxjs';

import {AppModule} from '../../../app.module';
import {DetailComponent} from '../detail.component';
import {AppleMusicAPIService} from '../../../services/apple-music-api.service';
import {ScreenNames} from '../../../constants/screen-names';

const ALBUM = {
  name: 'name',
  numberOfSongs: '1',
  artist: 'artist',
  title: 'title',
  image: 'image',
  price: {
    amount: '1',
    currency: 'EUR',
  },
  id: 'id',
  rights: 'rights',
  category: 'category',
  releaseDate: '2020-04-03T00:00:00-07:00',
};

const DETAIL = {
  album: ALBUM,
  relatedAlbums: [ALBUM],
};

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let appleMusicAPIService: AppleMusicAPIService;
  let router: Router;

  beforeEach(async(() => {
    appleMusicAPIService = jasmine.createSpyObj('AppleMusicAPIService', {'getDetails': of(DETAIL)});
    TestBed.configureTestingModule({
      imports: [AppModule],
      providers: [
        {provide: AppleMusicAPIService, useFactory: () => appleMusicAPIService},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    router = TestBed.get(Router);
    spyOn(router, 'navigate');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should get details from appleMusicAPIService', () => {
    expect(appleMusicAPIService.getDetails).toHaveBeenCalled();
  });

  it('should set data correctly', () => {
    expect(component.album).toEqual(ALBUM);
    expect(component.relatedAlbums).toEqual([ALBUM]);
  });

  describe('when getAlbumData function is called', () => {
    it('should get details from appleMusicAPIService', () => {
      component.getAlbumData(ALBUM.category, ALBUM.id);
      expect(appleMusicAPIService.getDetails).toHaveBeenCalled();
    });
  });

  describe('when showRelatedAlbums function is called', () => {
    it('should return true if relatedAlbums length is bigger than 1', () => {
      component.relatedAlbums = [ALBUM];
      expect(component.showRelatedAlbums()).toBeTruthy();
    });

    it('should return false if relatedAlbums length is 0', () => {
      component.relatedAlbums = [];
      expect(component.showRelatedAlbums()).toBeFalsy();
    });
  });

  describe('when updateAlbum function is called', () => {
    it('should update the album', () => {
      component.updateAlbum(ALBUM.category, ALBUM.id);
      expect(appleMusicAPIService.getDetails).toHaveBeenCalled();
    });

    it('should update the route', () => {
      component.updateAlbum(ALBUM.category, ALBUM.id);
      expect(router.navigate).toHaveBeenCalledWith([ScreenNames.Detail, ALBUM.category, ALBUM.id]);
    });
  });
});
