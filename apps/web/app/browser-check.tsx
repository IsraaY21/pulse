'use client';

import { useState } from 'react';

export function BrowserCheck({ apiUrl }: { apiUrl: string }) {
  const [answer, setAnswer] = useState('not asked yet');

  async function ask() {
    try {
      const response = await fetch(`${apiUrl}/health`);
      const body = await response.json();
      setAnswer(body.status);
    } catch {
      setAnswer('the request failed');
    }
  }

  return (
    <div>
      <button type="button" onClick={ask}>
        Ask from the browser
      </button>
      <p>{`Browser says: ${answer}`}</p>
    </div>
  );
}
