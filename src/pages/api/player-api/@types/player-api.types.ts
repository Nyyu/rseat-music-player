export type SongsResponse = {
  Songs: Song[]
}

export type Song = {
  uid: string
  name: string
  "stream-url": string
  img: {
    sm: string
    md: string
  }
  meta: Partial<SongMeta>
}
type SongMeta = {
  artist: string
  album: string
  genre: string
}
