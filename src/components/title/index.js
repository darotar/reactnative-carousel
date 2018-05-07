import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class Title extends PureComponent {
  render() {
    const { children, value, style } = this.props;
    
    return (
      <View style={[styles.wrapper, style]}>
        <Text style={styles.title}>{children || value}</Text>
      </View>
    );
  }
}
