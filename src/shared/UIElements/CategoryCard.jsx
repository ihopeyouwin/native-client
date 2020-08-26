import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';



export const CategoryButton = (props) => {
  return (
    <View style={s.badge}>
      <Text style={s.text}>{props.label}</Text>
      <Icon
        raised
        name='shopping-cart'
        type='font-awesome'
        color='#f50'
        onPress={() => props.onClick()}/>
      <Text style={s.text}>{props.sum + ' ' + props.currency}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  badge: {
    width: '24%',
    alignItems: 'center'
  },
  text: {

  }
});
