import { AppProps, ErrorFallbackProps } from "@blitzjs/next"

function RootErrorFallback({ error }: ErrorFallbackProps) {
  return (
    <></>
    // <ErrorComponent
    //   statusCode={(error as any)?.statusCode || 400}
    //   title={error.message || error.name}
    // />
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)
  return <Component {...pageProps} />
}

//export default withBlitz(MyApp)
export default MyApp
