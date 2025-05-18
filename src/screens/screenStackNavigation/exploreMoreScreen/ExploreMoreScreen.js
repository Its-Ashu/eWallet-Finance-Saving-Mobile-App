import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  Text,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import {Button} from '../../../components/Button';
import {CircularProgressBar} from '../../../components/CircularProgressBar';
import {LinkAccount} from '../../../components/LinkAccount';
import Theme from '../../../theme/Theme';
import styles from './styles';

const ExploreMoreScreen = props => {
  //All States
  const [isSelected, setIsSelected] = useState(1);
  const [listOfRisks, setListOfRisks] = useState([]);
  const [listOfRecentActivity, setListOfRecentActivity] = useState([]);

  useEffect(() => {
    doGetData();
  }, []);

  const doGetData = () => {
    const newListRisks = [];
    newListRisks.push({id: 1, title: 'Low-risk fund'});
    newListRisks.push({id: 2, title: 'Medium risk'});
    newListRisks.push({id: 3, title: 'High risk'});
    newListRisks.push({id: 4, title: 'Ultra high risk'});
    setListOfRisks(newListRisks);

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

  const renderListOfRisks = ({item, index}) => {
    const isItemSelected = item.id === isSelected;
    return (
      <Pressable
        style={[
          styles.viewRisk,
          isItemSelected && {backgroundColor: Theme.colors.bgColor1}, // highlight selected
        ]}
        onPress={() => {
          setIsSelected(item.id);
        }}>
        <Text
          style={[
            styles.textRisk,
            isItemSelected && {color: Theme.colors.textColor2},
          ]}>
          {item.title}
        </Text>
      </Pressable>
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
        barStyle="light-content"
        hidden={false}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <View
              style={{
                marginVertical: Theme.responsiveSize.size28,
                marginBottom: Theme.responsiveSize.size70,
              }}>
              <FlatList
                horizontal
                data={listOfRisks}
                renderItem={renderListOfRisks}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(i, index) => (index + 1).toString()}
                contentContainerStyle={{padding: Theme.responsiveSize.size18}}
              />
              <Text style={styles.textAmount}>
                {'$600'}
                <Text style={{color: Theme.colors.textColor18}}>{'.00'}</Text>
              </Text>
              <View
                style={[
                  styles.viewRow,
                  {
                    justifyContent: 'center',
                    marginTop: Theme.responsiveSize.size08,
                  },
                ]}>
                <Text style={styles.textLowRisk}>{'Low risk fund value'}</Text>
                <Image style={styles.iconInfo} source={Theme.icons.Info_Icon} />
              </View>
              <View style={styles.viewTotalEarned}>
                <View style={styles.viewRow}>
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
              </View>
              <CircularProgressBar />
              <Button
                title={'Add savings'}
                onPress={() => {
                  props.navigation.navigate(
                    Constants.ONBOARDING_WELCOME_SCREEN,
                  );
                }}
              />
              <View
                style={{
                  marginVertical: Theme.responsiveSize.size22,
                }}>
                <View
                  style={[
                    styles.viewRow,
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
                <Text style={styles.textDescription}>{'Description'}</Text>
                <Text
                  style={
                    styles.textSubDescription
                  }>{`The funds that we recommend 
for a long-term investment, typically 
have lower risks and more stable 
returns.`}</Text>
                <View style={styles.stats}>
                  <View style={styles.row}>
                    <Text style={styles.label}>Fee</Text>
                    <Text style={styles.value}>2 %</Text>
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.row}>
                    <Text style={styles.label}>Minimum Investment</Text>
                    <Text style={styles.value}>$5000</Text>
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.row}>
                    <Text style={styles.label}>Fund Manager</Text>
                    <Text style={styles.value}>Faysal Bank</Text>
                  </View>
                  <View style={styles.divider} />
                  <View style={styles.row}>
                    <Text style={styles.label}>Auditors</Text>
                    <Text style={styles.value}>Ernst and Young</Text>
                  </View>
                  <View style={styles.divider} />
                  <Text
                    style={[
                      styles.label,
                      {
                        color: Theme.colors.textColor7,
                        marginTop: Theme.responsiveSize.size02,
                      },
                    ]}>
                    Fund Managers Report
                  </Text>
                  <Text
                    style={[
                      styles.label,
                      {
                        color: Theme.colors.textColor7,
                        marginTop: Theme.responsiveSize.size10,
                        marginBottom: Theme.responsiveSize.size22,
                      },
                    ]}>
                    Funds Website
                  </Text>
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
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ExploreMoreScreen;
