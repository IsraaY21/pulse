import { Suspense } from 'react';
import { connection } from 'next/server';

async function ApiStatus() {
  await connection();
  const serverUrl = process.env.API_URL ?? 'http://localhost:3000';
  const response = await fetch(`${serverUrl}/health`);
  const body = await response.json();
  return <p>{`Server says: ${body.status}`}</p>;
}

export default function Home() {
  return (
    <main>
      <h1>Pulse</h1>
      <Suspense fallback={<p>Server says: asking...</p>}>
        <ApiStatus />
      </Suspense>
    </main>
  );
}
