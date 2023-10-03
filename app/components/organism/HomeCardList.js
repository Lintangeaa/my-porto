import React from 'react';
import Card from '../molekul/Card';
import Image from 'next/image';

const HomeCardList = () => {
  return (
    <div className="flex justify-between w-full space-x-4">
      <Card title={'SERVICES'}>
        <div className="flex justify-between p-5 space-x-4 border rounded-xl border-six">
          <Image
            src={'nodejs.svg'}
            width={80}
            height={50}
            alt="Lintang Dandung Prakoso"
          />
          <Image
            src={'/python.png'}
            width={50}
            height={50}
            alt="Lintang Dandung Prakoso"
          />
        </div>
      </Card>
      <Card title={'PROJECT'}>
        <div className="flex justify-between p-5 space-x-4 border rounded-full border-six"></div>
      </Card>
      <Card title={'ABOUT'}>
        <div className="flex justify-between p-5 space-x-4 border rounded-full border-six"></div>
      </Card>
    </div>
  );
};

export default HomeCardList;
