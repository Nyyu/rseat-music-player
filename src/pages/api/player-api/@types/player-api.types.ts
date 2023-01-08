export type SongsResponse = {
  songs: Song[]
}

export type Song = {
  uid: string
  name: string
  "stream-url": string
  "local-file-name"?: string
  img: {
    sm?: string
    md?: string
    lg?: string
  }
  meta: Partial<SongMeta>
}
type SongMeta = {
  artist: string
  album: string
  genre: string
}
