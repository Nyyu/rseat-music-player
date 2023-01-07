import { Song } from "../../pages/api/player-api/@types/player-api.types"
import { Heading } from "../core/Heading"
import { Text } from "../core/Text"
import Player from "../player/Player"

interface SongCardProps {
  song: Song
}

export const SongCard = ({ song }: SongCardProps) => {
  return (
    <Player.Body
      key={song.uid}
      className="flex flex-col gap-7 justify-center hover:brightness-75 transition duration-[350ms] hover:-translate-y-3 hover:cursor-pointer group shadow-md hover:shadow-xl"
    >
      <Player.Image
        src={song.img.md ?? ""}
        alt={`${song.name} banner`}
        className="max-w-[13rem] w-full object-cover group-hover:brightness-125 group-hover:scale-105 duration-[350ms]"
      />
      <Player.Title asChild>
        <span aria-label="music metadata" className="flex flex-col gap-2">
          <Heading size="2xl" weight="bold">
            {song.name}
          </Heading>
          <Text size="lg" className="opacity-70">
            {song.meta.artist}
          </Text>
        </span>
      </Player.Title>
      <Player.Controls localFileName={song["local-file-name"]} />
    </Player.Body>
  )
}
