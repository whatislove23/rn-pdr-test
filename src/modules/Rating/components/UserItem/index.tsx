import { View, Text } from 'react-native';
import { styles } from './styles';
import { FC } from 'react';

export interface UserItemProps {
  name: string;
  surname: string;
  rating: number;
}
export const UserItem: FC<UserItemProps> = ({ name, surname, rating }) => {
  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.textMain}>{name || 'Unknown name'}</Text>
        <Text style={styles.textMain}>{surname || 'Unknown name'}</Text>
      </View>
      <Text>
        Рейтинг <Text style={styles.textGreen}>{rating}</Text>
      </Text>
    </View>
  );
};
