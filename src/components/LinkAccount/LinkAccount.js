import {Image, Text, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Theme from '../../theme/Theme';
import {Button} from '../Button';

const LinkAccount = props => {
  const [isSelected, setIsSelected] = useState(0);
  return (
    <View style={[styles.viewAccountCard, props.viewStyle]}>
      {props?.isCardAdded ? (
        <>
          <View style={styles.viewRow}>
            <Text style={styles.textBank}>{'Bank Account'}</Text>
            <Image
              style={styles.downIcon}
              source={Theme.icons.Down_Arrow_Icon}
            />
          </View>
          <Pressable
            style={[
              styles.viewMainCard,
              {
                borderColor:
                  isSelected === 0
                    ? Theme.colors.bgColor4
                    : Theme.colors.bgColor9,
              },
            ]}
            onPress={() => {
              setIsSelected(0);
            }}>
            <View style={styles.viewCardCircles}>
              <Image
                style={styles.circleIcon}
                source={Theme.icons.Card_Circles}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.textMasterCard}>{'MasterCard'}</Text>
              <Text style={styles.textDebit}>{'Debit *8490'}</Text>
            </View>
            {isSelected === 0 && (
              <Image style={styles.checkIcon} source={Theme.icons.Check_Icon} />
            )}
          </Pressable>
          <Pressable
            style={[
              styles.viewMainCard,
              {
                borderColor:
                  isSelected === 1
                    ? Theme.colors.bgColor4
                    : Theme.colors.bgColor9,
              },
            ]}
            onPress={() => {
              setIsSelected(1);
            }}>
            <View style={styles.viewCardCircles}>
              <Image
                style={styles.visaIcon}
                resizeMode={'contain'}
                source={Theme.icons.Visa_Icon}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.textMasterCard}>{'Visa'}</Text>
              <Text style={styles.textDebit}>{'Debit *8490'}</Text>
            </View>
            {isSelected === 1 && (
              <Image style={styles.checkIcon} source={Theme.icons.Check_Icon} />
            )}
          </Pressable>
          <Pressable
            style={[
              styles.viewMainCard,
              {
                borderColor:
                  isSelected === 2
                    ? Theme.colors.bgColor4
                    : Theme.colors.bgColor9,
              },
            ]}
            onPress={() => {
              setIsSelected(2);
            }}>
            <View style={styles.viewCardCircles}>
              <Image
                style={styles.circleIcon}
                source={Theme.icons.Card_Circles}
              />
            </View>
            <View style={{flex: 1}}>
              <Text style={styles.textMasterCard}>{'MasterCard'}</Text>
              <Text style={styles.textDebit}>{'Debit *8490'}</Text>
            </View>
            {isSelected === 2 && (
              <Image style={styles.checkIcon} source={Theme.icons.Check_Icon} />
            )}
          </Pressable>
          <Button
            viewMain={{
              marginHorizontal: 0,
              marginTop: Theme.responsiveSize.size22,
            }}
            viewStyle={{
              backgroundColor: Theme.colors.bgColor1,
            }}
            title={props.buttonTitle}
            plusIcon={props.plusIcon}
            onPress={props.onPress}
          />
        </>
      ) : (
        <>
          <Image style={styles.cardIcon} source={props.icon} />
          <View style={{marginVertical: Theme.responsiveSize.size22}}>
            <Text
              style={[
                styles.textFeatureTitle,
                {color: Theme.colors.textColor1},
              ]}>
              {props.title}
            </Text>
            <Text
              style={[
                styles.textFeatureSubTitle,
                {color: Theme.colors.textColor6},
              ]}>
              {props.subTitle}
            </Text>
          </View>
          <Button
            viewMain={{
              marginHorizontal: 0,
            }}
            viewStyle={{
              backgroundColor: Theme.colors.bgColor1,
            }}
            title={props.buttonTitle}
            plusIcon={props.plusIcon}
            onPress={props.onPress}
          />
        </>
      )}
    </View>
  );
};

export default LinkAccount;
