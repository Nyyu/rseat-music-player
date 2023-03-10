import { Song } from "../../pages/api/player-api/@types/player-api.types"
import { Heading } from "../core/Heading"
import { Text } from "../core/Text"
import Player from "../player/Player"

interface SongCardProps {
  song: Song
  containerClassName?: string
  forcePlayerLayout?: boolean
}

export const SongCard = ({
  song,
  containerClassName = "",
  forcePlayerLayout = false,
}: SongCardProps) => {
  return (
    <Player.Body
      key={song.uid}
      className={`flex flex-col gap-7 justify-center items-center transition duration-[350ms] hover:-translate-y-3 group shadow-md hover:shadow-xl ${containerClassName}`}
    >
      <Player.Image
        src={song.img.md ?? ""}
        alt={`${song.name} banner`}
        className="max-w-[12rem] aspect-square w-full max-h-[12rem] object-cover group-hover:scale-105 duration-[350ms]"
      />
      <Player.Title asChild>
        <span
          aria-label="music metadata"
          className="flex flex-col gap-2 items-start"
        >
          <Heading size="2xl" weight="bold">
            {song.name}
          </Heading>
          <Text size="lg" className="opacity-70">
            {song.meta.artist}
          </Text>
        </span>
      </Player.Title>
      <Player.Controls
        src={song["stream-url"]}
        forceLayout={forcePlayerLayout}
      />
    </Player.Body>
  )
}
