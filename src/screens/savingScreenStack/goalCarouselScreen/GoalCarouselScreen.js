import React, {useState} from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Button} from '../../../components/Button';
import Theme from '../../../theme/Theme';
import styles from './styles';

const goals = [
  {
    id: '1',
    title: `Rainy day 
fund`,
    description: `Put some cash away for unexpected events. Our experts recommend you to save up to 3 to 6 months of your living expenses.`,
    icon: Theme.icons.Rainy_Icon,
    bgColor: Theme.colors.bgColor26,
    iconBGColor: Theme.colors.bgColor25,
  },
  {
    id: '2',
    title: 'New home',
    description:
      'A good rule of thumb is to save up to 20% of the home’s estimated sale price for a down payment.',
    icon: Theme.icons.Home3D_Icon,
    bgColor: Theme.colors.bgColor27,
    iconBGColor: Theme.colors.bgColor24,
  },
  {
    id: '3',
    title: 'New car',
    description:
      'Start saving money regularly and you will own the car of your dreams one day.',
    icon: Theme.icons.Game_Bar_Icon_2,
    bgColor: Theme.colors.bgColor1,
    iconBGColor: Theme.colors.bgColor10,
  },
];

const GoalCarouselScreen = props => {
  const {width} = useWindowDimensions();
  const [bgColor, setBgColor] = useState(goals[0].bgColor);

  const renderItem = ({item, index}) => {
    return (
      <View
        key={index + 1}
        style={[styles.cardContainer, {width: width * 0.8}]}>
        <View style={styles.cardInner}>
          <View
            style={[styles.iconContainer, {backgroundColor: item.iconBGColor}]}>
            <Image
              source={item.icon}
              style={styles.goalIcon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.goalTitle}>{item.title}</Text>
          <Text style={styles.goalDescription}>{item.description}</Text>

          <Button
            title="Start with this"
            viewMain={{marginHorizontal: 0}}
            viewStyle={{backgroundColor: Theme.colors.appColor}}
            onPress={() => {
              props.navigation.navigate(Constants.GOAL_INPUT_SCREEN);
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar backgroundColor={bgColor} barStyle="light-content" />
      <Animated.View
        style={[styles.viewMainContainer, {backgroundColor: bgColor}]}>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <View style={styles.viewCloseIcon}>
              <Image
                style={styles.closeIcon}
                tintColor={Theme.colors.bgColor1}
                source={Theme.icons.Close_Icon}
              />
            </View>
            <Text style={styles.textTitle}>{'Choose a goal'}</Text>

            <Carousel
              data={goals}
              renderItem={renderItem}
              sliderWidth={width}
              itemWidth={width * 0.8} // 80% width for each item
              onSnapToItem={index => setBgColor(goals[index].bgColor)} // Update background color
              activeSlideAlignment="center"
              inactiveSlideOpacity={0.6} // Lower opacity for side items
              inactiveSlideScale={0.8} // Shrink the side items
            />

            {/* Pagination Dots */}
            <View style={styles.pagination}>
              {goals.map((_, i) => {
                const dotOpacity = i === 0 ? 1 : 0.3; // Example, customize with scrollX animation
                return (
                  <Animated.View
                    key={i}
                    style={[styles.dot, {opacity: dotOpacity}]}
                  />
                );
              })}
            </View>
          </View>
        </SafeAreaView>
      </Animated.View>
    </>
  );
};

export default GoalCarouselScreen;
