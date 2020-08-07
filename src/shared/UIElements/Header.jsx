import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from 'react-native-elements';

export const HeaderElement = props => {
  return (
    <View style={s.header}>
      <Header backgroundColor='#ff0055'
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'My Goddamn money tracker app', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
      />
    </View>
  )
}

const s = StyleSheet.create({
  header: {
    backgroundColor: '#ff0055'
  }
});
