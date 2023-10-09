'use client';

import { useState } from 'react';
import crypto from 'crypto';

export default function Home() {
  const [restBody, setRestBody] = useState('');
  const [date, setDate] = useState('');
  const [secretKey, setSecretKey] = useState('testsecret');
  const [hmacBase64, setHmacBase64] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setRestBody(value);
  };

  const handleGenerateHMAC = () => {
    const requestBody = restBody.replace(/\s+/g, '').toUpperCase();
    const combinedString = `${requestBody}:${date}`;
    const hmac = crypto.createHmac('sha512', secretKey);
    hmac.update(combinedString, 'utf-8');
    const hmacBytes = hmac.digest('base64');
    setHmacBase64(hmacBytes);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(hmacBase64)
      .then(() => {
        alert('HMAC copied to clipboard!');
      })
      .catch((error) => {
        console.error('Error copying to clipboard:', error);
      });
  };

  return (
    <main className="h-screen p-5 bg-third">
      <h1 className="max-w-sm p-2 mx-auto text-xl text-center border-2 rounded text-primary border-primary">
        Signature Generator By Lintang
      </h1>
      <form className="flex flex-col mt-5 space-y-5 font-medium text-black">
        <label htmlFor="body" className="text-white">
          JSON String:
        </label>
        <textarea
          rows="5" // Adjust the number of rows as needed
          value={restBody}
          onChange={handleInputChange}
          id="body"
          className="p-2 border-2 rounded"
        />

        <label htmlFor="body" className="text-white">
          Tanggal Header
        </label>
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="max-w-xs p-2 border-2 rounded"
        />

        <button
          type="button"
          onClick={handleGenerateHMAC}
          className="w-auto p-3 mx-auto text-white rounded whitespace-nowrap bg-primary"
        >
          Generate
        </button>
      </form>
      <div className="p-2 mt-10 rounded bg-six">
        <h2>Hasil:</h2>
        <div className="flex justify-between p-3 space-x-4 bg-white text-primary">
          {hmacBase64 || '-'}
          <button
            type="button"
            onClick={handleCopyToClipboard}
            className="p-1 text-white rounded bg-secondary"
          >
            Copy
          </button>
        </div>
      </div>
    </main>
  );
}
