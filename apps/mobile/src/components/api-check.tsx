import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export function ApiCheck({ apiUrl }: { apiUrl: string }) {
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
    <View>
      <Button title="Ask the API" onPress={ask} />
      <Text>{`App says: ${answer}`}</Text>
    </View>
  );
}
