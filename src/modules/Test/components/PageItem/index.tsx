import { Text, TouchableOpacity } from 'react-native';
import { FC } from 'react';
import { styles } from './styles';

export interface PageItemProps {
  number: number;
  variant?: 'default' | 'current' | 'success' | 'error';
  onPress?: () => void;
}
export const PageItem: FC<PageItemProps> = ({
  number,
  variant = 'default',
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.default, styles[variant]]}
      onPress={onPress}
    >
      <Text style={[styles[`${variant}Text`]]}>{number}</Text>
    </TouchableOpacity>
  );
};
