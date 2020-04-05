export interface AlbumsAPIData {
  feed: {
    entry: AlbumAPIData[]
  };
}

export interface AlbumAPIData {
  'category': APIField;
  'id': APIField;
  'im:id': APIField;
  'im:image': APIField[];
  'im:artist': APIField;
  'im:itemCount': APIField;
  'im:name': APIField;
  'im:price': APIField;
  'releaseDate': APIField;
  'rights': APIField;
  'title': APIField;
}

interface APIField {
  attributes?: APIAttributes;
  id?: APIAttributes;
  label?: string;
}

interface APIAttributes {
  'im:id'?: string;
  term?: string;
}

export interface Album {
  artist: string;
  category: string;
  id: string;
  image: string;
  name: string;
  numberOfSongs: string;
  releaseDate: string;
  rights: string;
  price: {
    amount: string,
    currency: string,
  };
  title: string;
}

export interface DetailAlbum {
  album: Album;
  relatedAlbums: Album[];
}
