import { SafeAreaView } from 'react-native';
import { Auth } from '../../modules/AuthModule';

export default function AuthScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Auth />
    </SafeAreaView>
  );
}
