import { FC, useCallback, useEffect, useState } from 'react';

import {
  ScrollView,
  RefreshControl,
  View,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { useAuth } from '../../../../api/hooks/useCheckAuth';
import { TextCard } from '../../../../components/TextCard';
import { Title } from '../../../../components/Title';
import { EditIcon } from '../../../../components/icons/Edit';
import { Input } from '../../../../components/Input';
import { SaveIcon } from '../../../../components/icons/Save';
import { useUpdateProfile } from '../hooks/useUpdateProfile';
import { Button } from '../../../../components/Button';

import { useNavigation } from '@react-navigation/native';
import { APP_ROUTES } from '../../../../constants';

export interface ProfilePageProps {}
export const ProfilePage: FC<ProfilePageProps> = () => {
  const { user, profile, getProfile } = useAuth();

  const { updateProfile, status } = useUpdateProfile();
  const navigation = useNavigation();

  const [isNameEdit, setIsNameEdit] = useState(false);
  const [isSurnameEdit, setIsSurnameEdit] = useState(false);

  const [newName, setNewName] = useState(profile?.name ?? '');
  const [newSurname, setNewSurname] = useState(profile?.surname ?? '');

  const onRefresh = useCallback(() => {
    getProfile();
  }, [getProfile]);

  useEffect(() => {
    if (status === 'success') {
      getProfile();
    }
  }, [status, getProfile]);

  const getTimeInMinutes = (seconds: number) => {
    return Math.round(seconds / 60);
  };

  const onNameEdit = () => {
    setIsNameEdit(true);
  };
  const onSurnameEdit = () => {
    setIsSurnameEdit(true);
  };

  const onSaveName = () => {
    setIsNameEdit(false);
    if (user) {
      updateProfile({
        name: newName,
        surname: profile?.surname ?? '',
        id: user.id,
      });
    }
  };
  const onSaveSurname = () => {
    setIsSurnameEdit(false);
    if (user) {
      updateProfile({
        name: profile?.name ?? '',
        surname: newSurname,
        id: user.id,
      });
    }
  };

  const onGoToRating = () => {
    navigation.navigate(APP_ROUTES.RATING as never);
  };

  const onGoToHome = () => {
    navigation.navigate(APP_ROUTES.HOME as never);
  };

  return (
    <ScrollView
      style={styles.root}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={onRefresh} />
      }
    >
      <Title styles={styles.title}>Профіль</Title>
      <View style={styles.userInfoList}>
        <TextCard text={user?.email as string} />
        {isNameEdit ? (
          <Input
            placeholder="Введіть ім'я"
            value={newName}
            onChange={setNewName}
            variant="secondary"
            icon={
              <TouchableOpacity onPress={onSaveName}>
                <SaveIcon />
              </TouchableOpacity>
            }
          />
        ) : (
          <TextCard
            text={profile?.name ?? 'Unknown name'}
            icon={
              <TouchableOpacity onPress={onNameEdit}>
                <EditIcon />
              </TouchableOpacity>
            }
          />
        )}
        {isSurnameEdit ? (
          <Input
            variant="secondary"
            placeholder="Введіть прізвище"
            value={newSurname}
            onChange={setNewSurname}
            icon={
              <TouchableOpacity onPress={onSaveSurname}>
                <SaveIcon />
              </TouchableOpacity>
            }
          />
        ) : (
          <TextCard
            text={profile?.surname ?? 'Unknown surname'}
            icon={
              <TouchableOpacity onPress={onSurnameEdit}>
                <EditIcon />
              </TouchableOpacity>
            }
          />
        )}
        <Title styles={styles.title}>Статистика</Title>
        <TextCard text={`Рейтинг ${profile?.rating}`} />
        <TextCard text={`Пройдено тестів ${profile?.tests_count}`} />
        <TextCard text={`Cередній рахунок ${profile?.avg_score}`} />
        <TextCard
          text={`Cередній час складання тесту ${getTimeInMinutes(
            profile?.avg_time ?? 0
          )} хв`}
        />
        <View style={styles.buttons}>
          <Button text="Головна" onPress={onGoToHome} />
          <Button text="Рейтинг" variant="primary" onPress={onGoToRating} />
        </View>
      </View>
    </ScrollView>
  );
};
