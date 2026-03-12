import { Button } from '../../../../components/Button';
import { Header } from '../../Header';
import { useNavigation } from '@react-navigation/native';
import { FC, useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from './styles';
import { Input } from '../../../../components/Input';
import { Gradient } from '../Gradient';
import { APP_ROUTES } from '../../../../constants';
import { useRegister } from '../../hooks/useRegister';
import { useVerifyOtp } from '../../hooks/useVerifyOtp';
import { Title } from '../../../../components/Title';
import { OtpInput } from '../../../../components/OtpInput';

export interface AuthProps {}

export const Auth: FC<AuthProps> = ({}) => {
  const navigation = useNavigation();
  const { status, error, register } = useRegister();
  const { error: otpError, status: otpStatus, verifyOtp } = useVerifyOtp();
  const [step, setStep] = useState(0);

  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const onPrimaryButtonPress = () =>
    status === 'success' ? verifyOtp(email, otp) : register(email);

  const onBackButtonPress = () => {
    setStep((previousStep) => {
      const result = previousStep - 1;
      if (result < 0) {
        navigation.navigate(APP_ROUTES.HOME as never);
      }
      return result;
    });
  };

  useEffect(() => {
    if (status === 'success') {
      setStep(1);
    }
  }, [status]);

  useEffect(() => {
    if (otpStatus === 'success') {
      navigation.navigate(APP_ROUTES.HOME as never);
    }
  }, [otpStatus, navigation]);

  return (
    <View style={styles.root}>
      <Header />
      <View style={styles.form}>
        <Title>Авторизація</Title>
        <View style={styles.inputs}>
          {step === 1 ? (
            <OtpInput onChange={setOtp} />
          ) : (
            <Input placeholder="Email" value={email} onChange={setEmail} />
          )}
          {(error || otpError) && (
            <Text style={styles.error}>{error || otpError}</Text>
          )}
        </View>
        <View style={styles.buttonsWrapper}>
          <View style={styles.buttons}>
            <Button
              text="Назад"
              variant="secondary"
              onPress={onBackButtonPress}
              disabled={otpStatus === 'loading'}
            />
            <Button
              text={step === 1 ? 'Підтвердити' : 'Отримати код '}
              variant="primary"
              onPress={onPrimaryButtonPress}
              disabled={
                email === '' ||
                status === 'loading' ||
                (otp.length < 6 && step === 1) ||
                otpStatus === 'loading'
              }
            />
          </View>
          {step && (
            <Pressable>
              <Text
                style={styles.resend}
                onPress={() => {
                  register(email);
                }}
              >
                Відправити код ще раз?
              </Text>
            </Pressable>
          )}
        </View>
      </View>
      <Gradient />
    </View>
  );
};
