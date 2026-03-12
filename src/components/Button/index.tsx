import { TouchableOpacity, Text, View } from 'react-native';
import { FC } from 'react';
import { styles } from './styles';

export interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  onPress?: () => void;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  text,
  onPress,
  variant = 'secondary',
  disabled = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[
          styles.root,
          variant === 'secondary' && styles.rootSecondary,
          disabled && styles.rootDisabled,
        ]}
      >
        <Text
          style={[
            styles.textPrimary,
            variant === 'secondary' && styles.textSecondary,
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
