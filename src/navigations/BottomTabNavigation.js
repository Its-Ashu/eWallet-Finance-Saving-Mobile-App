import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Theme from '../theme/Theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Constants} from '../constants';
import {
  ActivityScreen,
  AddScreen,
  HomeScreen,
  ProfileScreen,
  SearchScreen,
} from '../screens';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = props => {
  const renderIcon = (focused, name) => {
    let source;
    if (name === Constants.HOME_SCREEN) {
      source = focused ? Theme.icons.Home_Bold_Icon : Theme.icons.Home_Icon;
    } else if (name === Constants.SEARCH_SCREEN) {
      source = focused ? Theme.icons.Search_Bold_Icon : Theme.icons.Search_Icon;
    } else if (name === Constants.ADD_SCREEN) {
      source = Theme.icons.Plus_White_Icon;
    } else if (name === Constants.ACTIVITY_SCREEN) {
      source = focused
        ? Theme.icons.Activity_Bold_Icon
        : Theme.icons.Activity_Icon;
    } else if (name === Constants.PROFILE_SCREEN) {
      source = focused
        ? Theme.icons.Profile_Bold_Icon
        : Theme.icons.Profile_Icon;
    }

    return (
      <View
        style={[
          focused && styles.viewImage,
          name === Constants.ADD_SCREEN && styles.viewPlus,
        ]}>
        <Image style={styles.imageMain} source={source} />
      </View>
    );
  };

  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.bgColor1}
        barStyle={'light-content'}
        hidden={false}
      />
      <SafeAreaView style={styles.mainContainer}>
        <Tab.Navigator
          initialRouteName={Constants.HOME_SCREEN}
          screenOptions={({navigation, route}) => ({})}>
          <Tab.Screen
            name={Constants.HOME_SCREEN}
            component={HomeScreen}
            options={{
              tabBarLabel: '',
              headerShown: false,
              tabBarStyle: {
                position: 'absolute',
                paddingTop: Theme.responsiveSize.size18,
                height: Theme.responsiveSize.size60,
                elevation: 0, // Remove shadow on Android
                shadowOpacity: 0, // Remove shadow on iOS
                borderTopWidth: 0, // Remove default border
              },

              tabBarHideOnKeyboard: Platform.OS === 'android',
              tabBarIcon: ({focused}) => {
                return renderIcon(focused, Constants.HOME_SCREEN);
              },
              tabBarButton: props => (
                <TouchableOpacity
                  {...props}
                  activeOpacity={1}
                  style={{flex: 1, alignSelf: 'center'}}>
                  {props.children}
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen
            name={Constants.SEARCH_SCREEN}
            component={SearchScreen}
            options={{
              tabBarLabel: '',
              headerShown: false,
              tabBarActiveTintColor: Theme.colors.tabBarColor1,
              tabBarInactiveTintColor: Theme.colors.tabBarColor2,
              tabBarStyle: {
                position: 'absolute',
                paddingTop: Theme.responsiveSize.size18,
                height: Theme.responsiveSize.size60,
                elevation: 0, // Remove shadow on Android
                shadowOpacity: 0, // Remove shadow on iOS
                borderTopWidth: 0, // Remove default border
              },
              tabBarHideOnKeyboard: Platform.OS === 'android',
              tabBarIcon: ({focused}) => {
                return renderIcon(focused, Constants.SEARCH_SCREEN);
              },
              tabBarButton: props => (
                <TouchableOpacity
                  {...props}
                  activeOpacity={1}
                  style={{flex: 1, alignSelf: 'center'}}>
                  {props.children}
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen
            name={Constants.ADD_SCREEN}
            component={AddScreen}
            options={{
              tabBarLabel: '',
              headerShown: false,
              tabBarActiveTintColor: Theme.colors.tabBarColor1,
              tabBarInactiveTintColor: Theme.colors.tabBarColor2,
              tabBarStyle: {
                position: 'absolute',
                paddingTop: Theme.responsiveSize.size18,
                height: Theme.responsiveSize.size60,
                elevation: 0, // Remove shadow on Android
                shadowOpacity: 0, // Remove shadow on iOS
                borderTopWidth: 0, // Remove default border
              },
              tabBarHideOnKeyboard: Platform.OS === 'android',
              tabBarIcon: ({focused}) => {
                return renderIcon(focused, Constants.ADD_SCREEN);
              },
              tabBarButton: props => (
                <TouchableOpacity
                  {...props}
                  activeOpacity={1}
                  style={{flex: 1, alignSelf: 'center'}}>
                  {props.children}
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen
            name={Constants.ACTIVITY_SCREEN}
            component={ActivityScreen}
            options={{
              tabBarLabel: '',
              headerShown: false,
              tabBarActiveTintColor: Theme.colors.tabBarColor1,
              tabBarInactiveTintColor: Theme.colors.tabBarColor2,
              tabBarStyle: {
                position: 'absolute',
                paddingTop: Theme.responsiveSize.size18,
                height: Theme.responsiveSize.size60,
                elevation: 0, // Remove shadow on Android
                shadowOpacity: 0, // Remove shadow on iOS
                borderTopWidth: 0, // Remove default border
              },
              tabBarHideOnKeyboard: Platform.OS === 'android',
              tabBarIcon: ({focused}) => {
                return renderIcon(focused, Constants.ACTIVITY_SCREEN);
              },
              tabBarButton: props => (
                <TouchableOpacity
                  {...props}
                  activeOpacity={1}
                  style={{flex: 1, alignSelf: 'center'}}>
                  {props.children}
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen
            name={Constants.PROFILE_SCREEN}
            component={ProfileScreen}
            options={{
              tabBarLabel: '',
              headerShown: false,
              tabBarActiveTintColor: Theme.colors.tabBarColor1,
              tabBarInactiveTintColor: Theme.colors.tabBarColor2,
              tabBarStyle: {
                position: 'absolute',
                paddingTop: Theme.responsiveSize.size18,
                height: Theme.responsiveSize.size60,
                elevation: 0, // Remove shadow on Android
                shadowOpacity: 0, // Remove shadow on iOS
                borderTopWidth: 0, // Remove default border
              },
              tabBarHideOnKeyboard: Platform.OS === 'android',
              tabBarIcon: ({focused}) => {
                return renderIcon(focused, Constants.PROFILE_SCREEN);
              },
              tabBarButton: props => (
                <TouchableOpacity
                  {...props}
                  activeOpacity={1}
                  style={{flex: 1, alignSelf: 'center'}}>
                  {props.children}
                </TouchableOpacity>
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.bgColor2,
  },
  imageMain: {
    width: Theme.responsiveSize.size24,
    height: Theme.responsiveSize.size24,
  },
  viewImage: {
    backgroundColor: Theme.colors.bgColor6,
    padding: Theme.responsiveSize.size10,
    borderRadius: Theme.responsiveSize.size16,
  },
  viewPlus: {
    backgroundColor: Theme.colors.bgColor4,
    padding: Theme.responsiveSize.size20,
    borderRadius: Theme.responsiveSize.size100,
    marginBottom: Theme.responsiveSize.size20,
    shadowColor: Theme.colors.bgColor1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default BottomTabNavigation;
