import type { GetStaticProps } from "next"
import type { Song } from "../api/player-api/@types/player-api.types"

import { ApiClient } from "../../services/api/api-client"
import { SongCard } from "../../components/cards/SongCard"

interface ChallengeProps {
  availableSongs: Song[]
}

const Challenge = ({ availableSongs = [] }: ChallengeProps) => {
  return (
    <main className="min-h-screen h-full flex justify-center items-center">
      <section aria-label="music selection" className="flex gap-4">
        <SongCard
          song={availableSongs[0]}
          key={availableSongs[0].uid}
          forcePlayerLayout
        />
        <div className="flex flex-col gap-4">
          <SongCard song={availableSongs[1]} key={availableSongs[1].uid} />
          <SongCard song={availableSongs[1]} key={availableSongs[1].uid} />
        </div>
      </section>
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

export default Challenge
