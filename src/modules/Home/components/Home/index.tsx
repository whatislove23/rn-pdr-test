import { FC } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { Title } from '../../../../components/Title';
import { TextCard } from '../../../../components/TextCard';
import { Button } from '../../../../components/Button';
import { APP_ROUTES } from '../../../../constants';
import { useNavigation } from '@react-navigation/native';

export interface HomeProps {}
export const Home: FC<HomeProps> = () => {
  const navigation = useNavigation();

  const onSecondaryButtonPress = () => {
    navigation.navigate(APP_ROUTES.RULES as never);
  };
  const onPrimaryButtonPress = () => {
    navigation.navigate(APP_ROUTES.TEST_START as never);
  };

  return (
    <View style={styles.root}>
      <Title styles={styles.title}>
        {
          'Готовий скласти іспит з ПДР? \n Перевір свої знання та \n підготуйся до екзамену легко!'
        }
      </Title>
      <View style={styles.cardList}>
        <TextCard text="🚗 Тести ПДР – проходь актуальні питання, як на реальному іспиті." />
        <TextCard text="📖 Правила дорожнього руху – вивчай ПДР у зручному форматі." />
        <TextCard text="Статистика прогресу – відстежуй свої результати та покращуй навички." />
      </View>
      <View style={styles.buttons}>
        <Button text="Вчити ПДР" onPress={onSecondaryButtonPress} />
        <Button
          text="Почати тест"
          variant="primary"
          onPress={onPrimaryButtonPress}
        />
      </View>
    </View>
  );
};
