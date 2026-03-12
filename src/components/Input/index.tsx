import { TextInput, View } from 'react-native';
import { styles } from './styles';
import { FC, JSX } from 'react';

export interface InputProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  icon?: JSX.Element;
  variant?: 'primary' | 'secondary';
}
export const Input: FC<InputProps> = ({
  placeholder,
  value,
  onChange,
  icon,
  variant = 'primary',
}) => {
  return (
    <View style={[styles.root, variant === 'secondary' && styles.secondary]}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(text) => onChange(text)}
      />
      {icon && <View style={styles.iconWrapper}>{icon}</View>}
    </View>
  );
};
