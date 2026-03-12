import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export interface HomeIconProps {
  width?: number;
  height?: number;
  stroke?: string;
}

export const HomeIcon: FC<HomeIconProps> = ({
  width = 15,
  height = 16,
  stroke = '#525252',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 16" fill="none">
      <Path
        d="M1.20001 6.39999L7.50001 1.14999L13.8 6.39999V14.8H9.60001V9.54999H5.40001V14.8H1.20001V6.39999Z"
        stroke={stroke}
        strokeLinejoin="round"
      />
    </Svg>
  );
};
