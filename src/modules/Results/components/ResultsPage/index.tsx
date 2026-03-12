import { styles } from './styles';
import { FC, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from '../../../../components/Button';
import { Title } from '../../../../components/Title';
import { useNavigation } from '@react-navigation/native';
import { APP_ROUTES } from '../../../../constants';
import { useAuth } from '../../../../api/hooks/useCheckAuth';
import { useSaveResults } from '../../hooks/useSaveResults';
export interface ResultsPageProps {
  score: number;
  time: string;
  maxScore?: number;
  variant: 'success' | 'error';
  seconds: number;
}
export const ResultsPage: FC<ResultsPageProps> = ({
  score,
  time,
  maxScore = 20,
  variant,
  seconds,
}) => {
  const navigation = useNavigation();
  const { processResults } = useSaveResults();

  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      processResults(user.id, score, seconds);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, score, seconds]);

  const handleGoToHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: APP_ROUTES.HOME as never }],
    });
  };

  const handleStartAgain = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: APP_ROUTES.TEST_START as never }],
    });
  };

  return (
    <View style={styles.root}>
      <View style={styles.content}>
        <View style={styles.textWrapper}>
          <Title styles={styles.title}>
            {variant === 'success'
              ? '✅ Тест пройдено успішно!'
              : '❌ Тест не складено!'}
          </Title>
          <Text style={styles.subtitle}>
            {variant === 'success'
              ? 'Вітаємо! Ви успішно склали тест. 🚗💨'
              : 'Не засмучуйтесь, спробуйте ще раз! 🔄'}
          </Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.subtitle}>
            <Text style={styles.textBold}>Ваш результат:</Text>
            {` ${score} / ${maxScore}`}
          </Text>
          <Text style={styles.subtitle}>
            <Text style={styles.textBold}>Витрачено часу:</Text>
            {` ${time}xв / 20хв`}
          </Text>
        </View>
        <View style={styles.textWrapper}>
          <View style={styles.buttonsWrapper}>
            <Button text="На головну" onPress={handleGoToHome} />
            <Button
              text="Почати ще раз"
              variant="primary"
              onPress={handleStartAgain}
            />
          </View>
          {user == null && (
            <TouchableOpacity
              onPress={() => navigation.navigate(APP_ROUTES.SIGN_IN as never)}
            >
              <Text style={styles.authText}>
                Авторизуйтесь, щоб зберегти результат
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};
