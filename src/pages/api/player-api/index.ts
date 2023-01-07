import { NextApiRequest, NextApiResponse } from "next"
import { SongsResponse } from "./@types/player-api.types"

export default async function handleGetSongs(
  req: NextApiRequest,
  res: NextApiResponse<SongsResponse>
) {
  if (req.method === "GET") {
  }
}
