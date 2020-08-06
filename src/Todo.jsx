import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


export const Todo = ({ todo }) => {
  return (
    <View style={s.todo}>
      <Text>
        {todo.title}
      </Text>
    </View>
  )
}

const s = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ed5315',
    borderRadius: 10,
    marginBottom: 5
  }
});