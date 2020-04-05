import {FilterPipe} from '../filter.pipe';

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

describe('FilterPipe', () => {
  const pipe = new FilterPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return value if search is empty', () =>{
    expect(pipe.transform(ALBUMS)).toEqual(ALBUMS);
  });

  it('should return value if search contains the name', () => {
    expect(pipe.transform(ALBUMS, 'name')).toEqual(ALBUMS);
  });

  it('should return value if search contains the artist', () => {
    expect(pipe.transform(ALBUMS, 'artist')).toEqual(ALBUMS);
  });

  it('should return null if search does not contain the name or artist', () => {
    expect(pipe.transform(ALBUMS, 'test')).toEqual([]);
  });
});
