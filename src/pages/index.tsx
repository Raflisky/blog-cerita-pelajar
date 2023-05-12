import Head from "next/head"

import { Category, CurrentNews, Hero, TrendNews } from "@/components/Sections/HomePage/index"

export default function Home() {
  return (
    <main>
      <Head>
        <title>Beranda | Cerita Pelajar</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <Hero />
      <Category />
      <CurrentNews />
      <TrendNews />
    </main>
  )
}
