import {useCallback, useEffect, useState} from 'react';
import {getData, removeData, storeData} from './asyncStorage';

let logoutTimer;

export const useAuthenticate = () => {
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);
  const [stateTokenExpirationDate, setStateTokenExpirationDate] = useState(null);

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setStateTokenExpirationDate(tokenExpirationDate);
    const userdata = {
      userId: uid,
      token: token,
      expiration: tokenExpirationDate.toISOString()
    }
    storeData(userdata, 'failed to storage auth key').then(res => console.log(res))
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setStateTokenExpirationDate(null);
    setUserId(null);
    removeData('userData', 'failed to delete auth data').then(res => console.log(res));
  }, []);

  useEffect(() => {
    if (token && stateTokenExpirationDate) {
      const remainingTime = stateTokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime)
    } else {
      clearTimeout(logoutTimer)
    }
  }, [token, logout, stateTokenExpirationDate]);

  useEffect(() => {
    const storedData = getData('userData', 'failed to fetch data');
    if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration))
    }
  }, [login]);

  return { token, login, logout, userId }
};

