import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export const Todo = ({ todo, onRemove }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => console.log(todo.id)}
      onLongPress={() => onRemove(todo.id)}
    >
      <View style={s.todo}>
        <Text>
          {todo.title}
        </Text>
      </View>
    </TouchableOpacity>
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
