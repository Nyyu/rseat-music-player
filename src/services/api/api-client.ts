import axios from "axios"
import { TApiClientConfig } from "./@types/api-client.types"

export function ApiClient(
  config: TApiClientConfig = {
    baseURL: "/api",
  }
) {
  const apiInstance = axios.create({
    baseURL: config.baseURL,
    headers: {},
  })

  return apiInstance
}

export const api = ApiClient()
