import Image from 'next/image';
import Layout from './components/organism/Layout';
import HireMe from './components/atom/HireMe';
import HomeCardList from './components/organism/HomeCardList';

export default function Home() {
  return (
    <Layout>
      <section className="w-full px-5 mt-5 lg:w-7/12 lg:mt-36">
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
        <div className="hidden mt-14 lg:block">
          <HomeCardList />
        </div>
      </section>
      <section className="flex items-center p-10 lg:w-5/12">
        <div className="relative w-full mx-auto rounded-lg">
          <div className="absolute inset-x-0 bottom-0 z-0 w-5/6 mx-auto h-4/6 rounded-t-xl bg-third"></div>
          <div className="absolute inset-x-0 z-20 w-full h-32 mx-auto transform bg-transparent border-4 rounded-full border-primary rpu rotate-12 top-1/2"></div>
          <div className="relative z-20">
            <Image
              src={'/mypoto.png'}
              width={1000}
              height={100}
              alt="Lintang Dandung Prakoso"
              className="w-full"
            />
          </div>
        </div>
      </section>
      <section className="px-5 lg:hidden">
        <HomeCardList />
      </section>
    </Layout>
  );
}
