import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator, Alert } from 'react-native';
import {} from 'react-native';
import { Button, ThemeContext } from 'react-native-elements';
import { CategoryButton } from '../shared/UIElements/CategoryCard';
import { useHttpClient } from '../shared/Hooks/http-hook';
import { Payment } from '../shared/UIElements/Payment';

const Landing = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJhbGV4VUEwMDdAZ21haWwuY29tIiwiaWF0IjoxNTk4NDI5MTk0LCJleHAiOjE1OTg1MTU1OTR9.KMcNXD5LVM2uFiqnezf3TPBTWaMADqCTJYRwRUDKCIU'
  const userId = '101' //useParams().userId;
  const [loadedPayments, setLoadedPayments] = useState(undefined);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const testing =()=> {
    console.log(loadedPayments.user.userId)
  }
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const responseData = await sendRequest(`http://192.168.1.19:5000/api/users/101`, 'GET', null, { Authorization: 'Bearer ' + token });
        setLoadedPayments(responseData);
      } catch (error) {
        Alert.alert('fetching data failed')
        setLoadedPayments(false)
      }
    };
    fetchUsers()
  }, [sendRequest]);

  return (
      <View>
        <View style={s.todo}>
          <Text>
            Landing Page
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => console.log('pressed')}
            onLongPress={() => console.log('pressedLong')}
          >
          <Button
            onPress={() => navigation.navigate('Wallets')}
            buttonStyle={theme.buttonMedium}
            title='to wallets'
          />
          </TouchableOpacity>
{/*          <FlatList
            data={loadedPayments}
            renderItem={({item}) => <Payment data={item}/>}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
          />*/}
        </View>


        <CategoryButton
          label={'products'}
          sum={20}
          currency={'BYN'}
          onClick={testing}
        />
        {loadedPayments && <View>
          <Text>{loadedPayments.user.email}</Text>
          <Text>{loadedPayments.user.name}</Text>
          <Text>{loadedPayments.user.userId}</Text>
          {loadedPayments.user.wallets.map(wallet => {
            return <View key={wallet.walletId} id={wallet.currency}>
              <View>
                <Text>{wallet.walletId} {wallet.currency}</Text>
              </View>
            </View>
          })}
        </View>}
        {isLoading && <ActivityIndicator size={120} color={theme.colors.primary}/>}
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

export default Landing;
