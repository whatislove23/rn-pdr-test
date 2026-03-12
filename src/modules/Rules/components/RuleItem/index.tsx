import { FC, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { TextCard } from '../../../../components/TextCard';
import Markdown from 'react-native-markdown-display';
export interface RuleItemProps {
  title: string;
  content: string;
}

export const RuleItem: FC<RuleItemProps> = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={[styles.root]}>
      <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
        <TextCard text={title} isActive={isExpanded} />
      </TouchableOpacity>
      {isExpanded && (
        <View style={styles.description}>
          <Markdown>{content}</Markdown>
        </View>
      )}
    </View>
  );
};
