import {
  CircleNotch,
  FastForward,
  Pause,
  Play,
  Rewind,
  Spinner,
} from "phosphor-react"
import { useEffect, useState, useRef } from "react"
import YoutubePlayer from "react-youtube"

interface YoutubeAudioProps {
  link?: string
  handleRewind: () => void
  handleForward: () => void
}

type MetaProps = {
  duration: number
  currentTime: number
}

const YtAudio = ({
  link = "",
  handleForward,
  handleRewind,
}: YoutubeAudioProps) => {
  const [meta, setMeta] = useState<MetaProps>({
    currentTime: 0,
    duration: 0,
  })
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPlayerReady, setIsPlayerReady] = useState(false)

  const playerStateRef = useRef(null)
  const playerFunctionsRef = useRef<any>(null)
  let urlCode

  const checkElapsedTime = (player: any) => {
    const duration = player.getDuration() as number
    const currentTime = player.getCurrentTime() as number

    if (duration && currentTime) {
      const formattedDuration = Math.round(duration)
      const formattedCurrentTime = Math.round(currentTime)

      setMeta({
        duration: formattedDuration,
        currentTime: formattedCurrentTime,
      })
    }
  }

  const playerOptions = {}

  // as it's an exposed input, I'm making sure that it's within the base YT Url boundaries
  if (
    link &&
    link.length &&
    typeof link === "string" &&
    link.includes("https://www.youtube.com/watch?v=")
  ) {
    urlCode = link.split("v=")[1].split("&")[0]
  }

  useEffect(() => {
    const player = playerFunctionsRef.current
    console.log(player)

    if (player && isPlayerReady) {
      if (isPlaying) {
        if (player["playVideo"]) player.playVideo()
        return
      }

      if (player["stopVideo"]) player.pauseVideo()
    }
  }, [isPlaying])

  const metaInterval = setInterval(() => {
    if (playerStateRef.current) {
      checkElapsedTime(playerStateRef.current)
    }

    if (meta.currentTime >= meta?.duration) {
      clearInterval(metaInterval)
      if (!!meta.currentTime) setIsPlaying(false)
    }
  }, 1000)

  const handleTogglePlay = () => setIsPlaying((prev) => !prev)

  return (
    <div className="w-full">
      {isPlayerReady ? (
        <>
          <div className="flex justify-between">
            <span
              className="btn btn-square btn-primary text-[1.8rem]"
              onClick={handleRewind}
            >
              <Rewind weight="fill" />
            </span>
            <span
              className="btn btn-square btn-primary text-[1.8rem]"
              onClick={handleTogglePlay}
            >
              {isPlaying ? <Pause weight="fill" /> : <Play weight="fill" />}
            </span>
            <span
              className="btn btn-square btn-primary text-[1.8rem]"
              onClick={handleForward}
            >
              <FastForward weight="fill" />
            </span>
          </div>
          {meta && meta.duration > 0 && (
            <div>
              <progress
                className="progress progress-primary"
                value={meta.currentTime}
                max={meta.duration}
              />
              <div className="flex justify-between text-sm opacity-70">
                <span>{meta.currentTime}</span>
                <span>{meta.duration}</span>
              </div>
            </div>
          )}
        </>
      ) : (
        <span className="w-full animate-pulse text-2xl">
          <CircleNotch className=" animate-spin-faster mx-auto" />
        </span>
      )}

      <YoutubePlayer
        className="hidden"
        videoId={urlCode}
        onStateChange={(e) => (playerStateRef.current = e.target)}
        opts={playerOptions}
        onReady={(e) => {
          playerFunctionsRef.current = e.target
          setTimeout(() => setIsPlayerReady(true), 1500)
        }}
      />
    </div>
  )
}

export default YtAudio
