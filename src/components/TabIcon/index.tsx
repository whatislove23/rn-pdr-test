import { APP_ROUTES } from '../../constants';
import { FC } from 'react';
import { HomeIcon } from '../icons/Home';
import { MenuIcon } from '../icons/Menu';
import { SettingsIcon } from '../icons/Settings';
import { TestIcon } from '../icons/Test';

import { View } from 'react-native';
import { theme } from '../../theme';
import { styles } from './styles';
export interface TabIconProps {
  focused: boolean;
  routeName: string;
}
export const TabIcon: FC<TabIconProps> = ({ focused, routeName }) => {
  const getTabIcon = (route: string, active: boolean) => {
    const iconColor = active ? theme.colors.white : theme.colors.black;
    switch (route) {
      case APP_ROUTES.HOME:
        return <HomeIcon stroke={iconColor} />;
      case APP_ROUTES.RULES:
        return <MenuIcon stroke={iconColor} />;
      case APP_ROUTES.SIGN_IN:
        return <SettingsIcon stroke={iconColor} />;
      case APP_ROUTES.TEST_START:
        return <TestIcon stroke={iconColor} />;
      default:
        return null;
    }
  };

  return (
    <View style={[styles.root, focused && styles.rootActive]}>
      {getTabIcon(routeName, focused)}
    </View>
  );
};
