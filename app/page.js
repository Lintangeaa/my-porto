import Image from "next/image"
import Layout from "./components/organism/Layout"
import HireMe from "./components/atom/HireMe"
import HomeCardList from "./components/organism/HomeCardList"

export default function Home() {
  return (
    <Layout>
      <section className="w-7/12 px-5 mt-36">
        <article>
          <h1 className="font-semibold text-8xl">Hey, I&apos;m</h1>
          <h1 className="mt-5 font-semibold text-7xl">
            Lintang Dandung Prakoso
          </h1>
          <p className="max-w-xl mt-10 text-2xl text-six">
            I&apos;m a website developer based in Indonesia, and I&apos;m
          </p>
          <p className="max-w-xl mt-2 text-2xl text-six">
            Very passionate and dedicated to my work. Say Hello
          </p>
        </article>
        <div className="mt-10">
          <HireMe />
        </div>
        <div className="mt-16">
          <HomeCardList />
        </div>
      </section>
      <section className="w-5/12"></section>
    </Layout>
  )
}
