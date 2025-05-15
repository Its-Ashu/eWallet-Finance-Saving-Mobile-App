import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import {Button} from '../../../components/Button';
import {LinkAccount} from '../../../components/LinkAccount';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const HomeScreen = props => {
  //All States
  const [listOfFinances, setListOfFinances] = useState([]);
  const [listOfRecentActivity, setListOfRecentActivity] = useState([]);
  //Main States
  const route = useRoute();
  const {isVerified} = route.params || {};

  useEffect(() => {
    doGetData();
  }, []);

  const doGetData = () => {
    const newListFinances = [];
    for (let index = 0; index < 8; index++) {
      newListFinances.push({
        id: index + 1,
        bgColor: Theme.colors.bgColor11,
        textColor: Theme.colors.textColor7,
        price: '+ 12%',
        title: 'Low risk fund',
        subTitle: '600',
      });
      newListFinances.push({
        id: index + 2,
        bgColor: Theme.colors.bgColor17,
        textColor: Theme.colors.textColor15,
        price: '+ $120',
        title: 'Medium risk',
        subTitle: '1240',
      });
    }
    setListOfFinances(newListFinances);

    const newListRecentActivity = [];
    for (let index = 0; index < 8; index++) {
      newListRecentActivity.push({
        id: index + 1,
        bgColor: Theme.colors.bgColor18,
        textColor: Theme.colors.textColor16,
        price: '- $340',
        title: 'Withdraw',
      });
      newListRecentActivity.push({
        id: index + 2,
        bgColor: Theme.colors.bgColor17,
        textColor: Theme.colors.textColor15,
        price: '+ 12%',
        title: 'Top-up',
      });
    }
    setListOfRecentActivity(newListRecentActivity);
  };

  const renderListOfFinances = ({item, index}) => {
    return (
      <View style={styles.viewFinance}>
        <View
          style={[styles.viewFinancePrice, {backgroundColor: item.bgColor}]}>
          <Text style={[styles.textPrice, {color: item.textColor}]}>
            {item.price}
          </Text>
        </View>
        <Text style={styles.textTitleFinance}>{item.title}</Text>
        <Text style={styles.textSubTitleFinance}>
          {item.subTitle}
          <Text style={{color: Theme.colors.textColor14}}>{'.00'}</Text>
        </Text>
      </View>
    );
  };

  const renderItemRecentActivity = ({item, index}) => {
    return (
      <View style={styles.viewRecentActivity}>
        <Text style={styles.textRecentSubTitle}>{item.title}</Text>
        <View
          style={[
            styles.viewRecentActivityPrice,
            {backgroundColor: item.bgColor},
          ]}>
          <Text
            style={[styles.textPriceRecentActivity, {color: item.textColor}]}>
            {item.price}
          </Text>
        </View>
      </View>
    );
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
          <ScrollView
            style={{flex: 1, marginBottom: Theme.responsiveSize.size50}}>
            <Image
              style={styles.appImage}
              resizeMode={'cover'}
              source={Theme.icons.Top_View_BG}
            />
            <View style={styles.viewTop}>
              <Text style={styles.textTitle}>{'Welcome, Robert'}</Text>
              <Text
                style={[
                  styles.textTitle,
                  {paddingTop: Theme.responsiveSize.size22},
                ]}>
                {isVerified ? '$1200' : '$0'}
                <Text style={{color: Theme.colors.textColor9}}>{'.00'}</Text>
              </Text>
              <View style={styles.viewRow}>
                <Text style={styles.textSubTitle}>{'Your account value'}</Text>
                <Image style={styles.infoIcon} source={Theme.icons.Info_Icon} />
              </View>
            </View>
            <View style={styles.viewMain}>
              {isVerified ? (
                <>
                  <View style={styles.viewTotalEarned}>
                    <View style={styles.viewRowTotal}>
                      <Text style={styles.textTotalEarned}>Total earned</Text>
                      <Text style={styles.textDate}>12 Jan - 16 Aug</Text>
                    </View>

                    <View style={styles.viewChartMain}>
                      <Image
                        style={styles.graphImage}
                        resizeMode={'contain'}
                        source={Theme.icons.Graph_Image}
                      />
                    </View>

                    <Button
                      viewStyle={{backgroundColor: Theme.colors.bgColor1}}
                      viewMain={styles.viewButton}
                      title={'Explore more'}
                      onPress={() => {
                        props.navigation.navigate(Constants.HOME_SCREEN_STACK, {
                          screen: Constants.EXPLORE_MORE_SCREEN,
                        });
                      }}
                    />
                  </View>
                  <FlatList
                    data={listOfFinances}
                    renderItem={renderListOfFinances}
                    keyExtractor={(i, index) => (index + 1).toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingBottom: Theme.responsiveSize.size22,
                      paddingHorizontal: Theme.responsiveSize.size20,
                    }}
                  />
                  <View
                    style={[
                      styles.viewRowMain,
                      {
                        marginHorizontal: Theme.responsiveSize.size20,
                      },
                    ]}>
                    <Text style={styles.textRecentTitle}>
                      {'Recent Activity'}
                    </Text>
                    <Text style={styles.textRecentSeeAll}>{'See all'}</Text>
                  </View>
                  <FlatList
                    data={listOfRecentActivity}
                    renderItem={renderItemRecentActivity}
                    keyExtractor={(i, index) => (index + 1).toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingVertical: Theme.responsiveSize.size08,
                      paddingHorizontal: Theme.responsiveSize.size20,
                    }}
                  />
                  <Button
                    plusIcon={true}
                    viewStyle={{backgroundColor: Theme.colors.bgColor4}}
                    viewMain={styles.viewRecentButton}
                    title={'Add savings'}
                    onPress={() => {}}
                  />

                  <Text style={styles.textYourGoals}>{'Your goals'}</Text>
                  <View style={styles.viewYourGoals}>
                    <Text style={styles.textNewHomeGoal}>
                      {'New home goal'}
                    </Text>
                    <Text style={styles.textYourGoalsPrice}>
                      {'$36340'}
                      <Text style={{color: Theme.colors.textColor14}}>
                        {'.00'}
                      </Text>
                    </Text>
                    <Text style={styles.textYourGoalsSubTitle}>
                      {'out of $250,000 (14%)'}
                    </Text>
                    <View
                      style={[
                        styles.viewRowMain,
                        {marginVertical: Theme.responsiveSize.size16},
                      ]}>
                      <View style={{flex: 1}}>
                        <Text style={styles.textYourGoalsDeposite}>
                          {'Weekly deposit'}
                        </Text>
                        <Text style={styles.textYourGoalsDate}>
                          {'1500.00'}
                        </Text>
                      </View>
                      <View style={{alignItems: 'flex-end'}}>
                        <Text style={styles.textYourGoalsDeposite}>
                          {'Est. date'}
                        </Text>
                        <Text style={styles.textYourGoalsDate}>
                          {'Nov 2025'}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.viewRowMain,
                        {marginTop: Theme.responsiveSize.size16},
                      ]}>
                      <Text
                        style={[
                          styles.textYourGoalsDate,
                          {
                            color: Theme.colors.textColor1,
                            fontFamily: Theme.fonts.fontSansMedium,
                            marginRight: Theme.responsiveSize.size10,
                          },
                        ]}>
                        {'Your Progress'}
                      </Text>
                      <Text style={styles.textYourGoalsDeposite}>
                        {'213660.00 remaining'}
                      </Text>
                    </View>
                    <View style={styles.viewProgress}>
                      <View
                        style={[
                          styles.viewInnerProgress,
                          {
                            width: '20%',
                          },
                        ]}
                      />
                    </View>
                  </View>
                  <LinkAccount
                    viewStyle={{marginTop: 0}}
                    icon={Theme.icons.Diamond_Icon}
                    title={'Add savings'}
                    subTitle={`Add funds for the things you want the most`}
                    plusIcon={false}
                    buttonTitle={'Top up'}
                    onPress={() => {}}
                  />
                </>
              ) : (
                <>
                  <View style={styles.viewFeatureCard}>
                    <Text style={styles.textFeatureTitle}>
                      {'Unlock all features'}
                    </Text>
                    <Text style={styles.textFeatureSubTitle}>
                      {'Please, confirm your ID and unlock all app features'}
                    </Text>
                    <View style={styles.viewRow}>
                      <Pressable
                        style={styles.viewPlus}
                        onPress={() => {
                          props.navigation.navigate(
                            Constants.VERIFY_IDENTITY_SCREEN_1,
                          );
                        }}>
                        <Image
                          style={styles.plusIcon}
                          source={Theme.icons.Plus_White_Icon}
                        />
                      </Pressable>
                      <Text style={styles.textFeatureCommonTitle}>
                        {'Add documents'}
                      </Text>
                    </View>
                  </View>
                  <LinkAccount
                    icon={Theme.icons.Card_Icon}
                    title={'Link your bank account'}
                    subTitle={
                      'Transfer your cash to investments to meet your goals'
                    }
                    plusIcon={true}
                    buttonTitle={'Add card'}
                    onPress={() => {}}
                  />
                </>
              )}
              <View style={styles.viewInvitation}>
                <View style={styles.viewCircles}>
                  <Image
                    style={styles.circleIcon}
                    source={Theme.icons.Circles_Icon}
                  />
                </View>
                <View
                  style={{flex: 1, marginLeft: Theme.responsiveSize.size22}}>
                  <Text style={styles.textInviteTitle}>{'Invite friends'}</Text>
                  <Text style={styles.textInviteSubTitle}>{'Code LP867J'}</Text>
                  <View style={styles.viewEarn}>
                    <Text style={styles.textEarn}>{'Earn $200'}</Text>
                  </View>
                </View>
                <Pressable>
                  <Image
                    style={styles.copyIcon}
                    source={Theme.icons.Copy_Icon}
                  />
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
