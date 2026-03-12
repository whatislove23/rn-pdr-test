import { SafeAreaView } from 'react-native';
import { StartPage } from '../../modules/Test';
import { TestPage } from '../../modules/Test/components/TestPage';

export default function StartTest() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StartPage />
    </SafeAreaView>
  );
}
export const Test = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TestPage />
    </SafeAreaView>
  );
};
