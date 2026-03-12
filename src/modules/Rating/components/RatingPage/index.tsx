import { FC, useEffect } from 'react';
import { Title } from '../../../../components/Title';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { useGetUsers } from '../../hooks/useGetUsers';
import { UserItem } from '../UserItem';
import { Button } from '../../../../components/Button';
import { useNavigation } from '@react-navigation/native';
export interface RatingPageProps {}
export const RatingPage: FC<RatingPageProps> = () => {
  const { users, getUsers } = useGetUsers();
  const navigation = useNavigation();
  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.root}>
      <Title>Рейтинг</Title>
      <FlatList
        style={styles.list}
        data={users}
        renderItem={({ item }) => (
          <UserItem
            name={item.name}
            surname={item.surname}
            rating={item.rating}
          />
        )}
        keyExtractor={(item) => item.user_id}
      />
      <View style={styles.button}>
        <Button text="Назад" variant="primary" onPress={onGoBack} />
      </View>
    </View>
  );
};
