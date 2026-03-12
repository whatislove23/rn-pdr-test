import { FC } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

export interface GradientProps {}
export const Gradient: FC<GradientProps> = ({}) => {
  return (
    <LinearGradient
      colors={['rgba(0, 128, 0, 1)', 'rgba(0, 128, 0, 0)']}
      start={{ x: 0, y: 1 }}
      end={{ x: 0, y: 0 }}
      locations={[0, 0.6]}
      style={styles.root}
    />
  );
};
