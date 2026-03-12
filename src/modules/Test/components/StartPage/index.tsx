import { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Title } from '../../../../components/Title';
import { Button } from '../../../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { APP_ROUTES } from '../../../../constants';

export interface StartPageProps {}
export const StartPage: FC<StartPageProps> = () => {
  const navigation = useNavigation();

  const onBackButtonPress = () => {
    navigation.goBack();
  };

  const onTestStart = () => {
    navigation.navigate(APP_ROUTES.TEST as never);
  };

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Title styles={styles.title}>
            {'Перевір свої знання ПДР \n🚗💡'}
          </Title>
          <Text style={styles.subtitle}>
            {'Категорія B – 20 запитань,\n дозволено до 2 помилок. 🚦✅'}
          </Text>
        </View>
        <View style={styles.buttons}>
          <Button text="Назад" onPress={onBackButtonPress} />
          <Button text="Почати тест" variant="primary" onPress={onTestStart} />
        </View>
      </View>
    </View>
  );
};
