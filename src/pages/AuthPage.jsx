import React, { useContext, useState } from 'react';

//import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/utilities/validators";

//import { useForm } from "../../shared/hooks/formHook";
//import { AuthContext } from "../../shared/authContext";
//import LoadingSpinner from "../../shared/UIElements/LoadingSpinner";
//import ErrorModal from "../../shared/UIElements/ErrorModal";
//import { useHttpClient } from "../../shared/hooks/http-hook";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button, ThemeContext} from 'react-native-elements';


const AuthPage = ({navigation}) => {
  const { theme } = useContext(ThemeContext);
  //const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  //const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const authSubmitHandler = async (event) => {
    event.preventDefault();

/*    if (isLoginMode) {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_URL + '/users/login',
          'POST',
          JSON.stringify({
            email: formState.inputs.email.value,
            password: formState.inputs.password.value
          }),
          {
            'Content-Type': 'application/json'
          });
        auth.login(responseData.userId, responseData.token)
      } catch (err) {}
    } else {
      try {
        const formData = new FormData();
        formData.append('email', formState.inputs.email.value);
        formData.append('name', formState.inputs.name.value);
        formData.append('password', formState.inputs.password.value);
        formData.append('image', formState.inputs.image.value);
        const responseData = await sendRequest(`${process.env.REACT_APP_BACKEND_URL}/users/signup`,'POST', formData);

        auth.login(responseData.userId, responseData.token)
      } catch (err) {}
    }*/
  };
/*  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData({
        ...formState.inputs,
        name: undefined,
        image: undefined
      }, formState.inputs.email.isValid && formState.inputs.password.isValid)
    } else {
      setFormData({
        ...formState.inputs,
        name: {
          value: '',
          isValid: false
        },
        image: {
          value: null,
          isValid: false
        }
      }, false)
    }
    setIsLoginMode(prevMode => !prevMode)
  };*/

  return (
    <React.Fragment>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => console.log('pressed')}
        onLongPress={() => console.log('pressedLong')}
      >
        <View style={s.todo}>
          <Text>
            auth Page
          </Text>
          <Button
            onPress={() => navigation.navigate('Home')}
            buttonStyle={theme.buttonMedium}
            title='Go Home'
          />
        </View>
      </TouchableOpacity>
    </React.Fragment>
  )
};

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
export default AuthPage;
