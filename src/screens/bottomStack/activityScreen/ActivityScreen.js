import React, {useState, useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Pressable,
  FlatList,
} from 'react-native';
import {Button} from '../../../components/Button';
import {CircularProgressBar} from '../../../components/CircularProgressBar';
import Theme from '../../../theme/Theme';
import styles from './styles';

const ActivityScreen = props => {
  const [listOfRecentActivity, setListOfRecentActivity] = useState([]);

  useEffect(() => {
    doGetData();
  }, []);

  const doGetData = () => {
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
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <View style={{marginBottom: Theme.responsiveSize.size100}}>
              <Image
                style={styles.appImage}
                resizeMode={'cover'}
                source={Theme.icons.Top_View_BG}
              />
              <View style={styles.viewTop}>
                <Text style={styles.textTitle}>{'My funds'}</Text>
              </View>
              <CircularProgressBar />
              <Button title={'Add savings'} onPress={() => {}} />
              <Text style={styles.textSubTitle}>{'Active funds'}</Text>
              <View style={styles.viewInvitation}>
                <View style={styles.viewCircles}>
                  <Image
                    style={styles.circleIcon}
                    source={Theme.icons.Home3D_Icon}
                  />
                </View>
                <Text style={styles.textInviteTitle}>{'New home'}</Text>
                <Pressable>
                  <Image
                    style={styles.copyIcon}
                    source={Theme.icons.Edit_Icon}
                  />
                </Pressable>
              </View>
              <View style={styles.viewInvitation}>
                <View
                  style={[
                    styles.viewCircles,
                    {backgroundColor: Theme.colors.bgColor10},
                  ]}>
                  <Image
                    style={styles.circleIcon}
                    source={Theme.icons.Game_Bar_Icon_2}
                  />
                </View>
                <Text style={styles.textInviteTitle}>{'New car'}</Text>
                <Pressable>
                  <Image
                    style={styles.copyIcon}
                    source={Theme.icons.Edit_Icon}
                  />
                </Pressable>
              </View>
              <View style={styles.viewInvitation}>
                <View
                  style={[
                    styles.viewCircles,
                    {backgroundColor: Theme.colors.bgColor25},
                  ]}>
                  <Image
                    style={styles.circleIcon}
                    source={Theme.icons.Rainy_Icon}
                  />
                </View>
                <Text style={styles.textInviteTitle}>{'Rainy day'}</Text>
                <Pressable>
                  <Image
                    style={styles.copyIcon}
                    source={Theme.icons.Edit_Icon}
                  />
                </Pressable>
              </View>
              <View style={styles.viewRowMain}>
                <Text style={styles.textRecentTitle}>{'Recent Activity'}</Text>
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
                  paddingBottom: Theme.responsiveSize.size14,
                  paddingHorizontal: Theme.responsiveSize.size20,
                }}
              />
              <Button title={'Add savings'} onPress={() => {}} />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ActivityScreen;
