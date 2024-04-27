import React, { useState } from 'react';

const CpoyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
      });
  };
  return (
    <div className="mt-2">
      <button
        className="bg-indigo-500 p-2 rounded font-semibold text-white hover:bg-blue-400"
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy Link.!!'}
      </button>
    </div>
  );
};

export default CpoyButton;
