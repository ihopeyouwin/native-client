import React, {useState} from 'react';
import {ScrollView, StyleSheet, View, FlatList} from 'react-native';
import {AddTodo} from './src/common/AddTodo';
import {HeaderElement} from './src/common/Header';
import {Todo} from './src/Todo';
import {Button} from 'react-native-elements';

const theme = {
  colors: {
    primary: '#fe8864',
    secondary: 'pink',
    success: 'pink'
  },
  Button: {},
};


export default function App() {
  const [todos, setTodos] = useState([
    {id:1, title: 'test'},
    {id:2, title: 'test'},
    {id:3, title: 'test'},
    {id:4, title: 'test'},
    {id:5, title: 'test'},
    {id:6, title: 'test'},
    {id:7, title: 'test'},
    {id:8, title: 'test'},
    {id:9, title: 'test'},
    {id:10, title: 'test'},
    {id:11, title: 'test'},
    {id:12, title: 'test'},
    {id:13, title: 'test'},
    {id:14, title: 'test'},
    {id:15, title: 'test'},
    {id:16, title: 'test'},
    {id:91, title: 'test'},
    {id:17, title: 'test'},
    {id:18, title: 'test'},
    {id:121, title: 'test'},
    {id:132, title: 'test'},
    {id:141, title: 'test'},
    {id:151, title: 'test'}
  ])

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    }

    setTodos((prev) => [...prev, {
        id: Date.now().toString(),
        title
      }]
    )
  }
  const getTodos = (todos) => {
    return [...todos].reverse()
  }

  return (
    <View>
      <HeaderElement/>
      <View style={s.container}>
        <AddTodo onSubmit={addTodo} theme={theme}/>
        <FlatList
          data={getTodos(todos)}
          renderItem={({item}) => <Todo todo={item}/>}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20
  }

});
