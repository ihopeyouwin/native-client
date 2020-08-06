import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Alert} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';

const buttonStyle = {
  padding: 12,
  width: '72%'
}

export const AddTodo = ({ theme, onSubmit}) => {
  const [inputValue ,setInputValue] = useState('')

  const pressHandler = () => {
    if(inputValue.trim()){
      onSubmit(inputValue)
      setInputValue('')
    }else {
      Alert.alert('input cant be empty')
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <View>
        <View style={s.block}>
          <TextInput
            placeholder='place descr there'
            style={s.input}
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Button
            onPress={pressHandler}
            buttonStyle={buttonStyle}
            title='Add'
          />
        </View>
      </View>
    </ThemeProvider>
  )
}

const s = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignContent: 'stretch',
    marginBottom: 10
  },

  input: {
    color: 'black',
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: '70%',
    padding: 10
  },
  navbar: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#ff0055',
    paddingBottom: 10
  },
  text: {
    color: '#fff',
    fontSize: 18
  }
});
