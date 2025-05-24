import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from '../../../components/Button';
import {ProgressBar} from '../../../components/ProgressBar';
import {Constants} from '../../../constants';
import Theme from '../../../theme/Theme';
import styles from './styles';

const MonthlyInvestmentScreen = props => {
  const [price, setPrice] = useState('20.00');
  const [isSelected, setIsSelected] = useState(0);

  return (
    <>
      <StatusBar
        backgroundColor={Theme.colors.bgColor2}
        barStyle={'dark-content'}
      />
      <SafeAreaView style={styles.viewMainContainer}>
        <View style={styles.container}>
          <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <View style={styles.viewTop}>
              <ProgressBar
                progress={0.5}
                backIcon={true}
                onPressback={() => {
                  props.navigation.goBack();
                }}
              />
              <Text style={styles.textTitle}>
                {`Amount of monthly 
investments`}
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.dollarSign}>$</Text>
              <TextInput
                style={styles.textInput}
                value={price}
                onChangeText={setPrice}
                placeholder={'20.00'}
                keyboardType="numeric"
                placeholderTextColor={Theme.colors.textColor18}
              />
            </View>
            <Text style={styles.textSubTitle}>
              {'Set amount of investments'}
            </Text>
            <View style={styles.viewRow}>
              <Pressable
                style={[
                  styles.viewWeekly,
                  {
                    borderColor:
                      isSelected === 0
                        ? Theme.colors.bgColor1
                        : Theme.colors.textColor14,
                  },
                ]}
                onPress={() => {
                  setIsSelected(0);
                }}>
                <Text style={styles.textWeekly}>{'Weekly'}</Text>
              </Pressable>
              <Pressable
                style={[
                  styles.viewWeekly,
                  {
                    borderColor:
                      isSelected === 1
                        ? Theme.colors.bgColor1
                        : Theme.colors.textColor14,
                  },
                ]}
                onPress={() => {
                  setIsSelected(1);
                }}>
                <Text style={styles.textWeekly}>{'Monthly'}</Text>
              </Pressable>
            </View>
            <Text style={styles.textDate}>
              {'Your monthly savings start from '}
              <Text style={{color: Theme.colors.textColor7}}>{'13 Apr'}</Text>
            </Text>
          </ScrollView>
          <Button
            title="Create your goal"
            viewMain={{
              marginHorizontal: 0,
              marginVertical: Theme.responsiveSize.size18,
            }}
            viewStyle={{backgroundColor: Theme.colors.bgColor4}}
            onPress={() => {
              props.navigation.navigate(Constants.SELECT_SIMPLE_FUND_SCREEN);
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default MonthlyInvestmentScreen;
