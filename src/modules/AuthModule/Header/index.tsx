import { FC } from 'react';
import { View, Text } from 'react-native';
import { Logo } from '../../../components/icons/Logo';
import { styles } from './styles';

export interface HeaderProps {}
export const Header: FC<HeaderProps> = () => {
  return (
    <View style={styles.root}>
      <Logo />
      <Text style={styles.text}>PDRTest</Text>
    </View>
  );
};
