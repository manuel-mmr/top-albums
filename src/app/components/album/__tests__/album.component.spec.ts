import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AlbumComponent} from '../album.component';

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

describe('AlbumComponent', () => {
  let component: AlbumComponent;
  let fixture: ComponentFixture<AlbumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumComponent);
    component = fixture.componentInstance;
    component.album = ALBUM;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
