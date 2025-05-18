import React from 'react';
import {SafeAreaView, StatusBar, View, Image, Text} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import SearchItem from '../../../components/SearchItem/SearchItem';
import Theme from '../../../theme/Theme';
import styles from './styles';

const SearchScreen = props => {
  //All States
  //Main States
  console.log('Hello World');
  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.appColor}
        barStyle={'light-content'}
        hidden={false}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}>
          <View style={styles.viewHeader}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Image style={styles.backIcon} source={Theme.icons.Back_Icon} />
            </TouchableOpacity>
            <Text style={styles.textTitle}>{'Recent activity'}</Text>
          </View>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <View style={{marginBottom: Theme.responsiveSize.size80}}>
              <Text style={styles.textDay}>{'Today'}</Text>
              <View style={{marginVertical: Theme.responsiveSize.size16}}>
                <SearchItem
                  icon={Theme.icons.Game_Bar_Icon}
                  title={'New car'}
                  subTitle={'+ 12%'}
                  viewPrice={{backgroundColor: Theme.colors.bgColor11}}
                  textSubTitle={{color: Theme.colors.textColor7}}
                />
                <SearchItem
                  icon={Theme.icons.Game_Bar_Icon}
                  title={'New home'}
                  subTitle={'+ $120'}
                  viewPrice={{backgroundColor: Theme.colors.bgColor17}}
                  textSubTitle={{color: Theme.colors.textColor15}}
                />
              </View>
              <Text style={styles.textDay}>{'Yesterday'}</Text>
              <View style={{marginVertical: Theme.responsiveSize.size16}}>
                <SearchItem
                  icon={Theme.icons.Game_Bar_Icon}
                  title={'New car'}
                  subTitle={'+ 12%'}
                  viewPrice={{backgroundColor: Theme.colors.bgColor11}}
                  textSubTitle={{color: Theme.colors.textColor7}}
                />
                <SearchItem
                  icon={Theme.icons.Game_Bar_Icon}
                  title={'New home'}
                  subTitle={'+ $120'}
                  viewPrice={{backgroundColor: Theme.colors.bgColor17}}
                  textSubTitle={{color: Theme.colors.textColor15}}
                />
              </View>
              <Text style={styles.textDay}>{'April 13'}</Text>
              <View style={{marginVertical: Theme.responsiveSize.size16}}>
                <SearchItem
                  icon={Theme.icons.Game_Bar_Icon}
                  title={'New car'}
                  subTitle={'+ 12%'}
                  viewPrice={{backgroundColor: Theme.colors.bgColor11}}
                  textSubTitle={{color: Theme.colors.textColor7}}
                />
                <SearchItem
                  icon={Theme.icons.Game_Bar_Icon}
                  title={'New home'}
                  subTitle={'+ $120'}
                  viewPrice={{backgroundColor: Theme.colors.bgColor17}}
                  textSubTitle={{color: Theme.colors.textColor15}}
                />
                <SearchItem
                  icon={Theme.icons.Game_Bar_Icon}
                  title={'New car'}
                  subTitle={'+ 12%'}
                  viewPrice={{backgroundColor: Theme.colors.bgColor11}}
                  textSubTitle={{color: Theme.colors.textColor7}}
                />
                <SearchItem
                  icon={Theme.icons.Game_Bar_Icon}
                  title={'New home'}
                  subTitle={'+ $120'}
                  viewPrice={{backgroundColor: Theme.colors.bgColor17}}
                  textSubTitle={{color: Theme.colors.textColor15}}
                />
                <SearchItem
                  icon={Theme.icons.Game_Bar_Icon}
                  title={'New car'}
                  subTitle={'+ 12%'}
                  viewPrice={{backgroundColor: Theme.colors.bgColor11}}
                  textSubTitle={{color: Theme.colors.textColor7}}
                />
                <SearchItem
                  icon={Theme.icons.Game_Bar_Icon}
                  title={'New home'}
                  subTitle={'+ $120'}
                  viewPrice={{backgroundColor: Theme.colors.bgColor17}}
                  textSubTitle={{color: Theme.colors.textColor15}}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SearchScreen;
