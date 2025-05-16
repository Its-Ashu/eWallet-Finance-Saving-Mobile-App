import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  FlatList,
  Text,
  Pressable,
  Image,
} from 'react-native';
import Theme from '../../../theme/Theme';
import styles from './styles';

const ExploreMoreScreen = props => {
  //All States
  const [isSelected, setIsSelected] = useState(1);
  const [listOfRisks, setListOfRisks] = useState([]);

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

  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.appColor}
        barStyle="light-content"
        hidden={false}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}>
          <View style={{marginVertical: Theme.responsiveSize.size28}}>
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
            </View>
            <View style={styles.viewTracking}></View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ExploreMoreScreen;
