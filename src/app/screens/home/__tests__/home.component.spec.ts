import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {of} from 'rxjs';

import {HomeComponent} from '../home.component';
import {AppModule} from '../../../app.module';
import {ScreenNames} from '../../../constants/screen-names';
import {AppleMusicAPIService} from '../../../services/apple-music-api.service';

const ALBUMS = [
  {
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
  }
];

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let appleMusicAPIService: AppleMusicAPIService;
  let router: Router;

  beforeEach(async(() => {
    appleMusicAPIService = jasmine.createSpyObj('AppleMusicAPIService', {'getAlbums': of(ALBUMS)});
    TestBed.configureTestingModule({
      imports: [AppModule, RouterTestingModule],
      providers: [
        {provide: AppleMusicAPIService, useFactory: () => appleMusicAPIService},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    spyOn(router, 'navigate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should get Album data from appleMusicAPIService', () => {
    expect(appleMusicAPIService.getAlbums).toHaveBeenCalled();
  });

  it('should set albums correctly', () => {
    expect(component.albums).toEqual(ALBUMS);
  });

  describe('when goToDetail function is called', () => {
    it('should go to detail screen', () => {
      component.goToDetail(ALBUMS[0]);
      expect(router.navigate).toHaveBeenCalledWith([ScreenNames.Detail, ALBUMS[0].category, ALBUMS[0].id]);
    });
  });
});
