import { DefaultUi, Player, Youtube } from "@vime/react"

import "@vime/core/themes/default.css"

const VimePlayer = ({ id = "" }) => {
  return (
    <Player controls>
      <Youtube videoId={id} />
      <DefaultUi />
    </Player>
  )
}

export default VimePlayer
