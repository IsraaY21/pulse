import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { BrowserCheck } from './browser-check';

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
});

describe('BrowserCheck', () => {
  it('shows the answer of the API after a click', async () => {
    const fetchMock = vi.fn(async () => Response.json({ status: 'ok' }));
    vi.stubGlobal('fetch', fetchMock);

    render(<BrowserCheck apiUrl="http://api.test" />);
    fireEvent.click(screen.getByRole('button', { name: 'Ask from the browser' }));

    expect(await screen.findByText('Browser says: ok')).toBeDefined();
    expect(fetchMock).toHaveBeenCalledWith('http://api.test/health');
  });

  it('says so when the request fails', async () => {
    const fetchMock = vi.fn(async () => {
      throw new TypeError('Failed to fetch');
    });
    vi.stubGlobal('fetch', fetchMock);

    render(<BrowserCheck apiUrl="http://api.test" />);
    fireEvent.click(screen.getByRole('button', { name: 'Ask from the browser' }));

    expect(await screen.findByText('Browser says: the request failed')).toBeDefined();
  });
});
