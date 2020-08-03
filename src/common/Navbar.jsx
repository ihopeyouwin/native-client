import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Navbar = props => {
  return (
    <View style={s.navbar}>
      <Text style={s.text}>
        My Goddamn money tracker app
      </Text>
    </View>
  )
}

const s = StyleSheet.create({
  navbar: {},
  text: {
    color: '#fff',
    fontSize: 24
  }
});
