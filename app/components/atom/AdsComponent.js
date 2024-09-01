'use client';

import { useEffect } from 'react';

const AdsComponent = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div style={{ width: '300px', height: '250px' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-9332525259294865"
        data-ad-slot="1234567890"
        data-ad-format="auto"
      ></ins>
    </div>
  );
};

export default AdsComponent;
