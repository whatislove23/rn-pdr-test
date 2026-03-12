import { styles } from './styles';
import { FC } from 'react';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TabIcon } from '../TabIcon';
export interface NavBarProps extends BottomTabBarProps {}
export const NavBar: FC<NavBarProps> = ({ state, navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.root}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => navigation.navigate(route.name)}
              style={styles.tab}
            >
              <TabIcon routeName={route.name} focused={isFocused} />
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};
