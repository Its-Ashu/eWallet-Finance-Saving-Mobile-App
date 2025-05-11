import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  ScrollView,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {Button} from '../../../components/Button';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const screenWidth = Dimensions.get('window').width;

const HomeScreen = props => {
  //All States
  const route = useRoute();
  const {isVerified} = route.params || {};
  //Main States

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        data: [100, 340, 200, 250, 400],
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#F9FAFB',
    backgroundGradientTo: '#F9FAFB',
    color: () => '#1D4ED8',
    labelColor: () => '#6B7280',
    strokeWidth: 3,
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#fff',
    },
    propsForBackgroundLines: {
      stroke: '#E5E7EB',
    },
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
              resizeMode={'contain'}
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
                      <View
                        style={[
                          styles.tooltipContainer,
                          {left: (screenWidth - 48) * 0.27},
                        ]}>
                        <Text style={styles.tooltipText}>+ $340</Text>
                        <View style={styles.tooltipDot} />
                      </View>

                      <LineChart
                        data={data}
                        width={screenWidth - 48}
                        height={146}
                        chartConfig={chartConfig}
                        bezier
                        withInnerLines
                        withOuterLines={false}
                        withVerticalLabels={false}
                        withHorizontalLabels={false}
                        style={styles.chartStyle}
                      />
                    </View>

                    <Button
                      viewStyle={{backgroundColor: Theme.colors.bgColor1}}
                      viewMain={styles.viewButton}
                      title={'Explore more'}
                      onPress={() => {}}
                    />
                  </View>
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
                  <View style={styles.viewAccountCard}>
                    <Image
                      style={styles.cardIcon}
                      source={Theme.icons.Card_Icon}
                    />
                    <View style={{marginVertical: Theme.responsiveSize.size22}}>
                      <Text
                        style={[
                          styles.textFeatureTitle,
                          {color: Theme.colors.textColor1},
                        ]}>
                        {'Link your bank account'}
                      </Text>
                      <Text
                        style={[
                          styles.textFeatureSubTitle,
                          {color: Theme.colors.textColor6},
                        ]}>
                        {'Transfer your cash to investments to meet your goals'}
                      </Text>
                    </View>
                    <Button
                      viewStyle={{backgroundColor: Theme.colors.bgColor1}}
                      title={'Add card'}
                      plusIcon={true}
                    />
                  </View>
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
