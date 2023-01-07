import type { GetStaticProps } from "next"
import type { Song } from "../api/player-api/@types/player-api.types"

import { ApiClient } from "../../services/api/api-client"
import Player from "../../components/player/Player"
import { Heading } from "../../components/core/Heading"
import { Text } from "../../components/core/Text"
import { SongCard } from "../../components/cards/SongCard"

interface SongsProps {
  availableSongs: Song[]
}

const Songs = ({ availableSongs = [] }: SongsProps) => {
  return (
    <main className="mx-12 my-8 flex gap-4">
      {availableSongs?.map((song) => {
        return <SongCard song={song} key={song.uid} />
      })}
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const api = ApiClient()

    const response = await api.get("/player-api")
    const availableSongs = response.data?.songs

    return {
      props: {
        availableSongs,
      },
      revalidate: 5, // 5 sec
    }
  } catch (err) {
    console.error(err)
  }

  return {
    props: {},
    // revalidate: 60 * 60 * 24, // 24 hours
    revalidate: 5, // 5 sec
  }
}

export default Songs
