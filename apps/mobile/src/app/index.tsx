import { Platform, StyleSheet, View } from 'react-native';
import { ApiCheck } from '@/components/api-check';

const apiUrl =
  Platform.OS === 'android' ? 'http://10.0.2.2:3000' : 'http://localhost:3000';

export default function Home() {
  return (
    <View style={styles.screen}>
      <ApiCheck apiUrl={apiUrl} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
