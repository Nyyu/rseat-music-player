import "../styles/globals.css"

import "@vime/core/themes/default.css"
import "@vime/core/themes/light.css"

import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
