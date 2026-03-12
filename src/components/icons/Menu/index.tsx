import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export interface MenuIconProps {
  width?: number;
  height?: number;
  stroke?: string;
}

export const MenuIcon: FC<MenuIconProps> = ({
  width = 22,
  height = 21,
  stroke = '#525252',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 22 21" fill="none">
      <Path
        d="M6.89581 5.90625H18.7083M6.89581 10.5H18.7083M6.89581 15.0938H18.7083"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.61456 6.5625C3.977 6.5625 4.27081 6.26869 4.27081 5.90625C4.27081 5.54381 3.977 5.25 3.61456 5.25C3.25213 5.25 2.95831 5.54381 2.95831 5.90625C2.95831 6.26869 3.25213 6.5625 3.61456 6.5625Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.61456 11.1562C3.977 11.1562 4.27081 10.8624 4.27081 10.5C4.27081 10.1376 3.977 9.84375 3.61456 9.84375C3.25213 9.84375 2.95831 10.1376 2.95831 10.5C2.95831 10.8624 3.25213 11.1562 3.61456 11.1562Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.61456 15.75C3.977 15.75 4.27081 15.4562 4.27081 15.0938C4.27081 14.7313 3.977 14.4375 3.61456 14.4375C3.25213 14.4375 2.95831 14.7313 2.95831 15.0938C2.95831 15.4562 3.25213 15.75 3.61456 15.75Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
