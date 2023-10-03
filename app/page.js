import Image from 'next/image';
import Layout from './components/organism/Layout';
import HireMe from './components/atom/HireMe';
import HomeCardList from './components/organism/HomeCardList';

export default function Home() {
  return (
    <Layout>
      <section className="w-7/12 px-5 mt-36">
        <article>
          <h1 className="text-5xl font-semibold">Hey, I&apos;m</h1>
          <h1 className="mt-5 text-4xl font-semibold">
            Lintang Dandung Prakoso
          </h1>
          <p className="max-w-xl mt-10 text-xl text-six">
            I&apos;m a website developer based in Indonesia, and I&apos;m
          </p>
          <p className="max-w-xl mt-2 text-xl text-six">
            Very passionate and dedicated to my work. Say Hello
          </p>
        </article>
        <div className="mt-10">
          <HireMe />
        </div>
        <div className="mt-14">
          <HomeCardList />
        </div>
      </section>
      <section className="flex items-center w-5/12 p-10">
        <div className="w-full border-2 border-double rounded-lg border-primary">
          <Image
            src={'/mypoto.png'}
            width={1000}
            height={100}
            alt="Lintang Dandung Prakoso"
            className="w-full"
          />
        </div>
      </section>
    </Layout>
  );
}
