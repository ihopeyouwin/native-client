import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/shared/RootNavigation';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from './src/authContext';
import { StyleSheet, View } from 'react-native';
import {HeaderElement} from './src/shared/UIElements/Header';
import {ThemeProvider} from 'react-native-elements';
import Landing from './src/pages/LandingPage';
import Wallets from './src/pages/WalletsPage';
import Transactions from './src/pages/TransactionsPage';
import AuthPage from './src/pages/AuthPage';
import {useAuthenticate} from './src/shared/Hooks/authHook';
import BtnGroup from './src/shared/UIElements/ButtonGroup';
import { CategoryButton } from './src/shared/UIElements/CategoryCard';


const theme = {
  colors: {
    primary: '#fe8864',
    secondary: 'pink',
    success: 'pink'
  },
  buttonMedium: {
    padding: 12,
    width: '72%',
    backgroundColor: '#fe8864'
  },
};

export const Stack = createStackNavigator();
export default function App() {
  const { token, login, logout, userId } = useAuthenticate();
  const testing =()=> {
    console.log(2+'123')
  }
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ isLoggedIn: !!token, token: token, userId: userId, login: login, logout: logout }}>
        <HeaderElement/>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator screenOptions={{ headerShown: false, cardStyleInterpolator: forFade }}>
            <Stack.Screen name="Home" component={Landing}/>
            <Stack.Screen name="Wallets" component={Wallets}/>
            <Stack.Screen name="Transactions" component={Transactions}/>
            <Stack.Screen name="AuthPage" component={AuthPage}/>
          </Stack.Navigator>
          <BtnGroup/>
        </NavigationContainer>
        {/*        <View style={s.container}>
          <AddTodo onSubmit={addTodo}/>
          <FlatList
            data={getTodos(todos)}
            renderItem={({item}) => <Todo todo={item} onRemove={removeTodo}/>}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />
        </View>*/}
      </AuthContext.Provider>
    </ThemeProvider>
  );
}

const s = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20
  }

});
