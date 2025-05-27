import React, {useRef, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {Button} from '../../../components/Button';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const onboardingData = [
  {
    id: 1,
    title: 'Automate your savings',
    subtitle: 'Save automatically, so you never have to think about it',
    image: Theme.icons.Dark_Icon1,
  },
  {
    id: 2,
    title: 'No manual trading required',
    subtitle:
      'Just set your parameters and choose the best amount for your goal',
    image: Theme.icons.Dark_Icon2,
  },
  {
    id: 3,
    title: 'Account protection',
    subtitle:
      'Keep your funds and transaction information safe with our security standards',
    image: Theme.icons.Dark_Icon3,
  },
];

const OnboardingWelcomeScreen = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      swiperRef.current?.scrollToIndex({index: nextIndex, animated: true}); // Ensure ref is not null
    } else {
      console.log('Onboarding Finished');
    }
  };

  const handleSkip = () => {
    const lastIndex = onboardingData.length - 1;
    setCurrentIndex(lastIndex);
    swiperRef.current?.scrollToIndex({index: lastIndex, animated: true}); // Ensure ref is not null
  };
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.appColor}
        barStyle={'light-content'}
        hidden={false}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}>
          <SwiperFlatList
            ref={swiperRef}
            index={currentIndex}
            onChangeIndex={({index}) => setCurrentIndex(index)}
            showPagination={false}
            scrollEnabled={false}>
            {onboardingData.map((item, index) => (
              <View key={index} style={styles.slide}>
                <View>
                  <Image
                    style={styles.appImage}
                    resizeMode={'contain'}
                    source={Theme.icons.Top_View_BG}
                  />
                  <View style={styles.viewDarkIcon}>
                    <Image
                      style={styles.darkIcon}
                      resizeMode={'contain'}
                      source={item.image}
                    />
                  </View>
                </View>
                <View style={styles.viewMain}>
                  <Text style={styles.textTitle}>{item.title}</Text>
                  <Text style={styles.textSubTitle}>{item.subtitle}</Text>
                </View>
              </View>
            ))}
          </SwiperFlatList>

          {currentIndex === onboardingData.length - 1 ? (
            <Button
              viewMain={{marginBottom: Theme.responsiveSize.size20}}
              title={'Create Account'}
              onPress={() => {
                props.navigation.navigate(Constants.REGISTER_SCREEN_STACK);
              }}
            />
          ) : (
            <View style={styles.viewBottom}>
              <TouchableOpacity activeOpacity={0.8} onPress={handleSkip}>
                <Text
                  style={[styles.textButton, {color: Theme.colors.textColor4}]}>
                  {'Skip'}
                </Text>
              </TouchableOpacity>
              <View style={styles.viewPagination}>
                {onboardingData.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.dotStyle,
                      currentIndex === index
                        ? styles.activeDotStyle
                        : styles.inActiveDotStyle,
                    ]}
                  />
                ))}
              </View>
              <TouchableOpacity activeOpacity={0.8} onPress={handleNext}>
                <Text style={styles.textButton}>{'Next'}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default OnboardingWelcomeScreen;
