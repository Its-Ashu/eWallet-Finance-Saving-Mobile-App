import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  viewAccountCard: {
    backgroundColor: Theme.colors.bgColor9,
    borderRadius: Theme.responsiveSize.size38,
    padding: Theme.responsiveSize.size26,
    marginVertical: Theme.responsiveSize.size24,
    marginHorizontal: Theme.responsiveSize.size20,
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.responsiveSize.size14,
  },
  textBank: {
    flex: 1,
    letterSpacing: -0.4,
    color: Theme.colors.textColor1,
    fontFamily: Theme.fonts.fontSansBold,
    fontSize: Theme.responsiveSize.size16,
    lineHeight: Theme.responsiveSize.size26,
  },
  downIcon: {
    height: Theme.responsiveSize.size22,
    width: Theme.responsiveSize.size22,
  },
  viewMainCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Theme.responsiveSize.size10,
    borderColor: Theme.colors.bgColor4,
    borderWidth: Theme.responsiveSize.size01,
    borderRadius: Theme.responsiveSize.size22,
    marginTop: Theme.responsiveSize.size08,
  },
  viewCardCircles: {
    backgroundColor: Theme.colors.bgColor2,
    borderRadius: Theme.responsiveSize.size50,
    padding: Theme.responsiveSize.size04,
    marginRight: Theme.responsiveSize.size14,
  },
  circleIcon: {
    height: Theme.responsiveSize.size36,
    width: Theme.responsiveSize.size36,
  },
  visaIcon: {
    height: Theme.responsiveSize.size32,
    width: Theme.responsiveSize.size32,
  },
  textMasterCard: {
    color: Theme.colors.textColor1,
    fontFamily: Theme.fonts.fontSansBold,
    fontSize: Theme.responsiveSize.size12,
    lineHeight: Theme.responsiveSize.size22,
  },
  textDebit: {
    color: Theme.colors.textColor12,
    fontFamily: Theme.fonts.fontSansMedium,
    fontSize: Theme.responsiveSize.size12,
    lineHeight: Theme.responsiveSize.size22,
  },
  checkIcon: {
    position: 'absolute',
    top: -Theme.responsiveSize.size06,
    left: -Theme.responsiveSize.size06,
    height: Theme.responsiveSize.size22,
    width: Theme.responsiveSize.size22,
  },
  cardIcon: {
    alignSelf: 'center',
    height: Theme.responsiveSize.size100,
    width: Theme.responsiveSize.size100,
    marginTop: Theme.responsiveSize.size18,
  },
  textFeatureTitle: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size22,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
    letterSpacing: -0.8,
    lineHeight: Theme.responsiveSize.size34,
  },
  textFeatureSubTitle: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor6,
    letterSpacing: -0.3,
    lineHeight: Theme.responsiveSize.size22,
    paddingVertical: Theme.responsiveSize.size04,
  },
});

export default styles;
