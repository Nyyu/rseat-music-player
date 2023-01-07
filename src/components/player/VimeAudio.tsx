import { Player, Audio, Ui } from "@vime/react"

interface VimeAudioProps {
  localFileName?: string
}

const VimeAudio = ({ localFileName = "" }: VimeAudioProps) => {
  return (
    <Player controls hidden>
      <Audio>
        <source data-src={`/source/${localFileName}`} type="audio/mp3" />
        {/* <source> and <track> elements are placed here. */}
      </Audio>
      {/* ... */}
      <Ui />
    </Player>
  )
}

export default VimeAudio
