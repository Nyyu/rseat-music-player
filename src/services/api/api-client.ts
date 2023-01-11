import axios from "axios"
import { TApiClientConfig } from "./@types/api-client.types"

export function ApiClient(
  config: TApiClientConfig = {
    path: "/api",
  }
) {
  const apiUrl = process.env.API_URL ?? "http://localhost:3000/"
  const baseURL = `${apiUrl}${config.path}`

  const apiInstance = axios.create({
    baseURL,
    headers: {},
  })

  return apiInstance
}

// Client side
export const api = ApiClient()
