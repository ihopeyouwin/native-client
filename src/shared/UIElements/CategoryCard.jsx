import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export const CategoryButton = (props) => {
  return (
    <View style={s.badge}>
      <Text style={s.text}>{props.label}</Text>
      <TouchableOpacity
        onPress={() => props.onClick()}
        activeOpacity={0.65}
      >
        <Icon
          reverse
          name={props.icon}
          type='font-awesome-5'
          color={props.color}
          style={{ backgroundColor: 'black' }}
        />
      </TouchableOpacity>
      <Text style={s.text}>{props.sum + ' ' + props.currency}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  badge: {
    width: '24%',
    alignItems: 'center',
    marginBottom: 15
  },
  text: {},

});
