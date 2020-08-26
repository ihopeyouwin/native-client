import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


export const Payment = ({ data }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => console.log(data.id)}
    >
      <View style={s.todo}>
        <Text>
          {data}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  todo: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ed5315',
    borderRadius: 10,
    marginBottom: 5
  }
});
