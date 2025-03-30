import React, {createContext, useState, useContext} from 'react';
import { saveToken } from '../api';
import { AppConstants, cacheData } from '../module';

const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [appColor, setAppColor] = useState({
    primaryColor: '',
    secondaryColor: '',
    tertiaryColor: '',
  });

  const setLogin = text => {
    setIsLogin(text);
  };

  const setLoginUserData = data => {
    setUserData(data);
  };

  const doLogoutUser = () => {
    saveToken(null);
    const asyncItem = AppConstants.AsyncKeyLiterals;
    cacheData.saveDataToCachedWithKey(asyncItem.isLoggedIn, false);
    cacheData.saveDataToCachedWithKey(asyncItem.userData, null);
    setLogin(false);
    setLoginUserData(null);
  };

  const doSetAppColor = data => {
    setAppColor(data);
  };

  return (
    <GlobalContext.Provider
      value={{
        isLogin,
        setLogin,
        userData,
        setLoginUserData,
        doLogoutUser,
        appColor,
        doSetAppColor,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  return context;
};

export {GlobalContext, GlobalProvider, useGlobal};
