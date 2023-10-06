import React from 'react';
import Card from '../molekul/Card';
import Image from 'next/image';

const HomeCardList = () => {
  return (
    <div className="flex justify-between w-full space-x-4">
      <Card title={'SERVICES'}>
        <div className="flex justify-between w-full max-w-[100px] p-5 space-x-4 border lg:max-w-[200px] rounded-xl border-six">
          <Image
            src={'nodejs.svg'}
            width={80}
            height={50}
            alt="Lintang Dandung Prakoso"
            className="max-w-[30px] lg:max-w-full"
          />
          <Image
            src={'/python.png'}
            width={50}
            height={50}
            alt="Lintang Dandung Prakoso"
            className="max-w-[30px] lg:max-w-full"
          />
        </div>
      </Card>
      <Card title={'PROJECT'}>
        <Image
          src={'/laptop.png'}
          width={200}
          height={50}
          alt="Lintang Dandung Prakoso"
        />
      </Card>
      <Card title={'ABOUT'}>
        <p className="font-semibold text-8xl text-primary">A</p>
      </Card>
    </div>
  );
};

export default HomeCardList;
