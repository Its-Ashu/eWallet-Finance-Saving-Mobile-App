import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Image,
  Text,
  Pressable,
} from 'react-native';
import {LinkAccount} from '../../../components/LinkAccount';
import {ProfileItem} from '../../../components/ProfileItem';
import Theme from '../../../theme/Theme';
import styles from './styles';

const ProfileScreen = props => {
  //All States
  //Main States
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
            <View style={{marginBottom: Theme.responsiveSize.size80}}>
              <Image
                style={styles.appImage}
                resizeMode={'cover'}
                source={Theme.icons.Top_View_BG}
              />
              <View style={styles.viewTop}>
                <Image
                  style={styles.profileIcon}
                  source={{
                    uri: 'https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
                  }}
                />
                <Text style={styles.textTitle}>{'Robert Wilson'}</Text>
                <Text
                  style={[
                    styles.textTitle,
                    {fontSize: Theme.responsiveSize.size34, marginVertical: 0},
                  ]}>
                  {'$0'}
                  <Text style={{color: Theme.colors.textColor9}}>{'.00'}</Text>
                </Text>
                <View style={styles.viewRow}>
                  <Text style={styles.textSubTitle}>
                    {'Your account value'}
                  </Text>
                  <Image
                    style={styles.infoIcon}
                    source={Theme.icons.Info_Icon}
                  />
                </View>
                <LinkAccount
                  icon={Theme.icons.Card_Icon}
                  title={'Link your bank account'}
                  subTitle={`Transfer your cash to 
investments to meet your goals`}
                  plusIcon={true}
                  buttonTitle={'Add card'}
                  onPress={() => {}}
                />
                <ProfileItem
                  icon={Theme.icons.Profile_Blue_Icon}
                  title={'Personal'}
                  divider
                  onPress={() => {}}
                />
                <ProfileItem
                  icon={Theme.icons.Privacy_Icon}
                  title={'Privacy & Security'}
                  divider
                  onPress={() => {}}
                />
                <ProfileItem
                  icon={Theme.icons.Fire_Blue_Icon}
                  title={'Savings goals'}
                  divider
                  onPress={() => {}}
                />
                <ProfileItem
                  icon={Theme.icons.Help_Icon}
                  title={'Help & Support'}
                  divider
                  onPress={() => {}}
                />
                <ProfileItem
                  icon={Theme.icons.Logout_Icon}
                  title={'Logout'}
                  onPress={() => {}}
                />
                <View style={styles.viewInvitation}>
                  <View style={styles.viewCircles}>
                    <Image
                      style={styles.circleIcon}
                      source={Theme.icons.Circles_Icon}
                    />
                  </View>
                  <View
                    style={{flex: 1, marginLeft: Theme.responsiveSize.size22}}>
                    <Text style={styles.textInviteTitle}>
                      {'Invite friends'}
                    </Text>
                    <Text style={styles.textInviteSubTitle}>
                      {'Code LP867J'}
                    </Text>
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
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;
