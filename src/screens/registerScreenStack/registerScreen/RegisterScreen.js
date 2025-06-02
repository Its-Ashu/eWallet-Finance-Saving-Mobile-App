import React, {useState, useRef, useEffect} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Modal,
  PanResponder,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Button} from '../../../components/Button';
import {ProgressBar} from '../../../components/ProgressBar';
import {CountryItem} from '../../../components/RegisterItem';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const {height} = Dimensions.get('window');
const SHEET_HEIGHT = height * 0.6;

const RegisterScreen = props => {
  const [listOfCountry, setListOfCountry] = useState([]);
  const [mobileNo, setMobileNo] = useState('');
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(false);

  const translateY = useRef(new Animated.Value(SHEET_HEIGHT)).current;

  const openSheet = () => {
    translateY.setValue(SHEET_HEIGHT); // Ensure it starts off-screen
    setVisible(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeSheet = () => {
    Animated.timing(translateY, {
      toValue: SHEET_HEIGHT,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setVisible(false);
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.setValue(gestureState.dy);
        }
      },

      onPanResponderRelease: (evt, gestureState) => {
        const shouldClose = gestureState.dy > 100;

        if (shouldClose) {
          Animated.timing(translateY, {
            toValue: SHEET_HEIGHT,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
            setVisible(false);
          });
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    doGetData();
  }, []);

  const doGetData = () => {
    const newListCountry = [];
    for (let index = 0; index < 10; index++) {
      newListCountry.push({
        id: index + 1,
        icon: Theme.icons.Flag_Icon,
        title: 'Netherlands',
        subTitle: 'NL',
      });
    }
    setListOfCountry(newListCountry);
  };

  const renderItem = ({item, index}) => {
    return (
      <CountryItem
        id={item.id}
        icon={item.icon}
        title={item.title}
        subTitle={item.subTitle}
        onPress={closeSheet}
      />
    );
  };

  return (
    <>
      <GestureHandlerRootView style={{flex: 1}}>
        <StatusBar
          backgroundColor={Theme.colors.bgColor2}
          barStyle={'dark-content'}
          hidden={false}
        />
        <SafeAreaView style={styles.viewMainContainer}>
          <View style={styles.container}>
            <KeyboardAwareScrollView
              style={{flex: 1}}
              contentContainerStyle={styles.scrollView}
              showsVerticalScrollIndicator={false}>
              <View style={styles.viewTop}>
                <ProgressBar
                  progress={0.125}
                  backIcon={false}
                  onPressback={() => {}}
                />
                <Text style={styles.textTitle}>{'Getting Started'}</Text>
              </View>
              <View style={{flex: 1}}>
                <View style={styles.viewTextInput}>
                  <TouchableOpacity style={styles.viewRow} onPress={openSheet}>
                    <Image
                      style={styles.flagIcon}
                      source={Theme.icons.Flag_Icon}
                    />
                    <Image
                      style={styles.downIcon}
                      source={Theme.icons.Down_Arrow_Icon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.textCountryNo}>{'+31'}</Text>
                  <TextInput
                    style={styles.textInput}
                    keyboardType={'numeric'}
                    placeholder={'0 00 00 00 00'}
                    value={mobileNo}
                    onChangeText={setMobileNo}
                    placeholderTextColor={Theme.colors.textColor5}
                  />
                </View>
                <Button
                  title={'Send Code'}
                  viewStyle={{backgroundColor: Theme.colors.bgColor1}}
                  viewMain={{
                    marginHorizontal: 0,
                    marginVertical: Theme.responsiveSize.size16,
                  }}
                  onPress={() => {
                    props.navigation.navigate(Constants.REGISTER_OTP_SCREEN);
                  }}
                />
                <View style={styles.textViewLogIn}>
                  <Text style={styles.textCommon}>
                    {'Already have an account?'}
                    <Text
                      style={styles.textBold}
                      onPress={() => {
                        props.navigation.navigate(Constants.LOGIN_SCREEN);
                      }}>
                      {'  Sign In'}
                    </Text>
                  </Text>
                </View>
              </View>
              <View style={styles.viewBottom}>
                <Text style={styles.textCommon}>{'Or continue with:'}</Text>
                <View style={styles.viewRow}>
                  <View style={styles.viewGoogle}>
                    <Image
                      resizeMode={'contain'}
                      style={styles.appleIcon}
                      source={Theme.icons.Apple_Icon}
                    />
                  </View>
                  <View style={styles.viewGoogle}>
                    <Image
                      resizeMode={'contain'}
                      style={styles.appleIcon}
                      source={Theme.icons.Google_Icon}
                    />
                  </View>
                </View>
                <Text style={styles.textSubTitle}>
                  {'By creating an account you agree to our '}
                  <Text style={{color: Theme.colors.textColor1}}>
                    {'Terms and Conditions'}
                  </Text>
                </Text>
              </View>
            </KeyboardAwareScrollView>
          </View>
          <Modal
            transparent
            visible={visible}
            animationType="none"
            statusBarTranslucent={true}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={closeSheet}
              style={styles.backdrop}
            />

            <Animated.View
              style={[styles.sheetContainer, {transform: [{translateY}]}]}
              {...panResponder.panHandlers}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.viewDraggable}
                onPress={closeSheet}>
                <Image
                  style={styles.draggableIcon}
                  source={Theme.icons.Draggable_Icon}
                />
              </TouchableOpacity>
              <View style={styles.viewMain}>
                <View style={styles.viewRow}>
                  <View style={styles.viewSearchTextInput}>
                    <Image
                      style={styles.searchIcon}
                      source={Theme.icons.Search_Icon}
                    />
                    <TextInput
                      placeholderTextColor={Theme.colors.textColor4}
                      placeholder={'Country'}
                      value={search}
                      onChangeText={setSearch}
                      style={styles.textInputSearch}
                    />
                  </View>
                  <Text style={styles.textCancel} onPress={closeSheet}>
                    {'Cancel'}
                  </Text>
                </View>
                <FlatList
                  data={listOfCountry}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{paddingBottom: 50}}
                />
              </View>
            </Animated.View>
          </Modal>
        </SafeAreaView>
      </GestureHandlerRootView>
    </>
  );
};

export default RegisterScreen;
