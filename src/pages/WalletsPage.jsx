import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Button, ThemeContext} from 'react-native-elements';

const Wallets = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => console.log('pressed')}
      onLongPress={() => console.log('pressedLong')}
    >
      <View style={s.todo}>
        <Text>
          Wallets Page
        </Text>
        <Button
          onPress={() => navigation.navigate('Home')}
          buttonStyle={theme.buttonMedium}
          title='Go Home'
        />
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

export default Wallets;
