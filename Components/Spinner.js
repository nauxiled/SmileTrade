
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import Screen from './Screen';


export default function Spinner() {
  return (
    <Screen style={styles.container}>
      <ActivityIndicator size="large" color= '#CBC3E3' />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});