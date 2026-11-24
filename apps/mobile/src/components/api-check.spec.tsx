import { fireEvent, render, screen } from '@testing-library/react-native';
import { ApiCheck } from './api-check';

afterEach(() => {
  jest.restoreAllMocks();
});

describe('ApiCheck', () => {
  it('shows the answer of the API after a press', async () => {
    const fetchMock = jest
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(Response.json({ status: 'ok' }));

    await render(<ApiCheck apiUrl="http://api.test" />);
    await fireEvent.press(screen.getByRole('button', { name: 'Ask the API' }));

    expect(await screen.findByText('App says: ok')).toBeOnTheScreen();
    expect(fetchMock).toHaveBeenCalledWith('http://api.test/health');
  });

  it('says so when the request fails', async () => {
    jest.spyOn(globalThis, 'fetch').mockRejectedValue(new TypeError('Network request failed'));

    await render(<ApiCheck apiUrl="http://api.test" />);
    await fireEvent.press(screen.getByRole('button', { name: 'Ask the API' }));

    expect(await screen.findByText('App says: the request failed')).toBeOnTheScreen();
  });
});
