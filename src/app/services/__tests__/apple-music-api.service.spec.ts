import {TestBed} from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {of} from 'rxjs';

import {AppleMusicAPIService} from '../apple-music-api.service';
import {environment} from '../../../environments/environment.prod';

describe('AppleMusicAPIService', () => {
  let http: HttpClient;
  let appleMusicAPIService: AppleMusicAPIService;

  beforeEach(() => {
    http = jasmine.createSpyObj('HttpClient', {'get': of([])});
    TestBed.configureTestingModule({
      providers: [
        AppleMusicAPIService,
        {provide: HttpClient, useFactory: () => http},
      ]
    }).compileComponents();;

    appleMusicAPIService = TestBed.get(AppleMusicAPIService);
  });

  it('should be created', () => {
    expect(appleMusicAPIService).toBeDefined();
  });

  describe('when getAlbums function is called', () => {
    it('should get data from http call', () => {
      appleMusicAPIService.getAlbums();
      expect(http.get).toHaveBeenCalledWith(environment.server);
    });
  });

  describe('when getDetails function is called', () => {
    it('should call getAlbums function', () => {
      spyOn(appleMusicAPIService, 'getAlbums').and.returnValue(of([]));
      appleMusicAPIService.getDetails('category', 'id');
      expect(appleMusicAPIService.getAlbums).toHaveBeenCalled();
    });
  });
});
