import React, { memo } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import TabbarStack from './Tabbar';
import { store } from './store/Store';

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Provider store={store}>
          <TabbarStack />
        </Provider>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(App, () => true);

