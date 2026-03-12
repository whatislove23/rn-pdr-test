import { FC, JSX } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export interface TextCardProps {
  text: string;
  isActive?: boolean;
  icon?: JSX.Element;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'unchecked'
    | 'checked';
}
export const TextCard: FC<TextCardProps> = ({
  text,
  isActive = false,
  variant = 'primary',
  icon,
}) => {
  return (
    <View style={[styles.card, isActive && styles.cardActive, styles[variant]]}>
      {(variant === 'checked' || variant === 'unchecked') && (
        <View style={styles.checkedIcon}>
          {variant === 'checked' && <View style={styles.checkedIconInner} />}
        </View>
      )}
      <Text
        style={[
          styles.cardText,
          isActive && styles.cardTextActive,
          styles[variant],
        ]}
      >
        {text}
      </Text>
      {icon && <View style={styles.iconWrapper}>{icon}</View>}
    </View>
  );
};
