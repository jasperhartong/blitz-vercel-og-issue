import { AppProps } from "@blitzjs/next"

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  return <>{getLayout(<Component {...pageProps} />)}</>
}

export default MyApp
