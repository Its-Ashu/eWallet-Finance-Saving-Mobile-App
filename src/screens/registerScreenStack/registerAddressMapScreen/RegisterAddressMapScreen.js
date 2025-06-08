import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LocationItem from '../../../components/LocationItem';
import {ProgressBar} from '../../../components/ProgressBar';
import Theme from '../../../theme/Theme';
import styles from './styles';

const RegisterAddressMapScreen = props => {
  //All States
  //Main States
  const [search, setSearch] = useState('');
  const [listOfLocation, setListOfLocation] = useState([]);

  useEffect(() => {
    doGetData();
  }, []);

  const doGetData = () => {
    const newList = [];
    for (let index = 0; index < 8; index++) {
      newList.push({
        id: index + 1,
        title: '428 Greenwich Ave',
        subTitle: 'Brooklyn, NY',
      });
    }
    setListOfLocation(newList);
  };

  const renderItem = ({item, index}) => {
    return <LocationItem title={item?.title} subTitle={item?.subTitle} />;
  };

  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.bgColor2}
        barStyle={'dark-content'}
        hidden={false}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}>
          <View style={styles.paddingH20}>
            <View style={styles.viewTop}>
              <ProgressBar progress={0.475} />
              <Text style={styles.textTitle}>{'Home address'}</Text>
            </View>
            <View style={styles.viewSearchLocation}>
              <Image
                style={styles.locationIcon}
                source={Theme.icons.Location_Icon}
              />
              <TextInput
                value={search}
                onChangeText={setSearch}
                style={styles.inputSearch}
                placeholderStyle={styles.placeholderStyle}
                placeholderTextColor={'#12033A66'}
                placeholder={'Search your location'}
              />
              <TouchableOpacity
                onPress={() => {
                  setSearch('');
                }}>
                <Image
                  style={styles.locationIcon}
                  source={Theme.icons.Close_Icon}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.viewRow, styles.paddingV8, styles.paddingH20]}>
            <Image
              style={styles.homeIcon}
              tintColor={Theme.colors.bgColor1}
              source={Theme.icons.Home_Icon}
            />
            <Text style={styles.textCommon}>{'My current location'}</Text>
          </View>
          <View style={styles.viewMap}>
            <Image style={styles.mapImage} source={Theme.icons.Map_Image} />
          </View>

          <View style={[styles.paddingH20, {flex: 1}]}>
            <Text style={styles.textSubTitle}>{'Address'}</Text>
            <FlatList
              vertical
              data={listOfLocation}
              renderItem={renderItem}
              keyExtractor={(i, index) => (index + 1).toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: Theme.responsiveSize.size10,
              }}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default RegisterAddressMapScreen;
