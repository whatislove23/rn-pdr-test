import { styles } from './styles';
import { FC, useEffect } from 'react';
import { View, Dimensions, Text, FlatList } from 'react-native';
import { Title } from '../../../../components/Title';
import { RuleItem } from '../RuleItem';
import { useGetRules } from '../../hooks/useGetRules';
import { Loader } from '../../../../components/Loader';

const { height } = Dimensions.get('window');

export interface RulesPageProps {}
export const RulesPage: FC<RulesPageProps> = () => {
  const { rules, error, status, getRules } = useGetRules();
  useEffect(() => {
    getRules();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.root}>
      <Title styles={styles.title}>
        {'Всі правила ПДР в одному \n місці 🚦'}
      </Title>
      {status === 'loading' && (
        <View style={[styles.loaderWrapper, { height: height - 300 }]}>
          <Loader />
        </View>
      )}
      {status === 'error' && (
        <View style={[styles.loaderWrapper, { height: height - 300 }]}>
          <Text style={styles.errorText}> {error} </Text>
        </View>
      )}
      {status === 'success' && (
        <FlatList
          style={styles.viewList}
          data={rules}
          renderItem={({ item }) => (
            <View style={styles.ruleItem}>
              <RuleItem title={item.title} content={item.content} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};
