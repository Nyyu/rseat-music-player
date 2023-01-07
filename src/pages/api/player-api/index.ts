import { NextApiRequest, NextApiResponse } from "next"
import { SongsResponse } from "./@types/player-api.types"
import { songs } from "../../../database/in-memory-database"

export default async function handleGetSongs(
  req: NextApiRequest,
  res: NextApiResponse<SongsResponse>
) {
  if (req.method === "GET") {
    res.status(200).json({
      songs,
    })
  }
}
