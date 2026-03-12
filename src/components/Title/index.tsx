import { FC } from 'react';
import { Text } from 'react-native';
import { styles as titleStyles } from './styles';

export interface TitleProps {
  children: string;
  styles?: object;
}
export const Title: FC<TitleProps> = ({ children, styles = {} }) => {
  return <Text style={[titleStyles.title, styles && styles]}>{children}</Text>;
};
