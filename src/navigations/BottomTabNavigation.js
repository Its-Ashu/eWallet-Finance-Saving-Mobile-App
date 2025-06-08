import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Theme from '../theme/Theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Svg, {Path} from 'react-native-svg';
import {Constants} from '../constants';
import {
  ActivityScreen,
  AddScreen,
  ProfileScreen,
  SearchScreen,
} from '../screens';
import HomeScreenStack from './HomeScreenStack';

const Tab = createBottomTabNavigator();
const {width} = Dimensions.get('window');
const height = Theme.responsiveSize.size70;
const centerRadius = Theme.responsiveSize.size28 + 0.5;

const BottomTabNavigation = props => {
  const CustomTabBar = ({state, descriptors, navigation}) => {
    const midIndex = Math.floor(state.routes.length / 2);

    const getPath = () => {
      const left = width / 2 - centerRadius * 2.5;
      const right = width / 2 + centerRadius * 2.5;

      return `
      M0 0
      L${left - 20} 0
      C${left + 56} 0, ${left + 12} ${centerRadius * 1.9}, ${width / 2} ${
        centerRadius * 2
      }
      C${right - 12} ${centerRadius * 1.9}, ${right - 56} 0, ${right + 20} 0
      L${width} 0
      L${width} ${height}
      L0 ${height}
      Z
    `;
    };

    return (
      <View style={styles.container}>
        <Svg width={width} height={height} style={styles.svg}>
          <Path fill={Theme.colors.bgColor2} d={getPath()} />
        </Svg>

        <View style={styles.tabRow}>
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;
            const icon =
              route.name === Constants.HOME_SCREEN_STACK
                ? isFocused
                  ? Theme.icons.Home_Bold_Icon
                  : Theme.icons.Home_Icon
                : route.name === Constants.SEARCH_SCREEN
                ? isFocused
                  ? Theme.icons.Search_Bold_Icon
                  : Theme.icons.Search_Tab_Icon
                : route.name === Constants.ADD_SCREEN
                ? Theme.icons.Plus_White_Icon
                : route.name === Constants.ACTIVITY_SCREEN
                ? isFocused
                  ? Theme.icons.Activity_Bold_Icon
                  : Theme.icons.Activity_Icon
                : route.name === Constants.PROFILE_SCREEN
                ? isFocused
                  ? Theme.icons.Profile_Bold_Icon
                  : Theme.icons.Profile_Icon
                : null;

            const onPress = () => {
              if (!isFocused) navigation.navigate(route.name);
            };

            const isCenter = index === midIndex;

            return (
              <TouchableOpacity
                key={index}
                onPress={onPress}
                activeOpacity={0.9}>
                {isCenter ? (
                  <View style={styles.viewPlus}>
                    <Image source={icon} style={styles.imageMain} />
                  </View>
                ) : (
                  <View
                    style={[
                      isFocused ? styles.viewImage : styles.viewImageInactive,
                      {
                        marginLeft: isCenter ? 0 : -Theme.responsiveSize.size18,
                        marginRight: isCenter
                          ? 0
                          : -Theme.responsiveSize.size18,
                      },
                    ]}>
                    <Image source={icon} style={styles.imageMain} />
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
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
          initialRouteName={Constants.HOME_SCREEN_STACK}
          tabBar={props => <CustomTabBar {...props} />}
          screenOptions={({navigation, route}) => ({})}>
          <Tab.Screen
            name={Constants.HOME_SCREEN_STACK}
            component={HomeScreenStack}
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
                  style={{
                    flex: 1,
                    alignSelf: 'center',
                    backgroundColor: Theme.colors.transparent,
                  }}>
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
  viewImageInactive: {
    backgroundColor: Theme.colors.transparent,
    padding: Theme.responsiveSize.size10,
    borderRadius: Theme.responsiveSize.size16,
  },
  viewPlus: {
    marginBottom: Theme.responsiveSize.size40,
    height: Theme.responsiveSize.size60,
    width: Theme.responsiveSize.size60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.bgColor4,
    padding: Theme.responsiveSize.size20,
    borderRadius: Theme.responsiveSize.size100,
    shadowColor: Theme.colors.bgColor1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: width,
    height: height,
    alignItems: 'center',
  },
  svg: {
    position: 'absolute',
    top: 3,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width,
    height: height,
    alignItems: 'center',
    backgroundColor: Theme.colors.transparent,
  },
});

export default BottomTabNavigation;
