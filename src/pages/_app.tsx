import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <Layout session={session}>
      <Component {...pageProps} />
    </Layout>
  )
}
