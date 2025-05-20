import React, {useState} from 'react';
import {SafeAreaView, StatusBar, Text, View, TextInput} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button} from '../../../components/Button';
import {ProgressBar} from '../../../components/ProgressBar';
import Theme from '../../../theme/Theme';
import styles from './styles';

const MonthlyInvestmentScreen = props => {
  const [price, setPrice] = useState('20.00');

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
          </ScrollView>
          <Button
            title="Create your goal"
            viewMain={{
              marginHorizontal: 0,
              marginVertical: Theme.responsiveSize.size18,
            }}
            viewStyle={{backgroundColor: Theme.colors.bgColor4}}
            onPress={() => {}}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default MonthlyInvestmentScreen;
