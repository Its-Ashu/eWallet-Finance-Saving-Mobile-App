import {Dimensions, StyleSheet} from 'react-native';
import Theme from '../../../theme/Theme';

const {width} = Dimensions.get('window');
const buttonSize = width / 3 - Theme.responsiveSize.size06;

const styles = StyleSheet.create({
  viewMainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.bgColor2,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.colors.bgColor2,
    paddingBottom: Theme.responsiveSize.size15,
  },
  viewTop: {
    marginTop: Theme.responsiveSize.size16,
    paddingHorizontal: Theme.responsiveSize.size20,
  },
  textTitle: {
    textAlign: 'center',
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size24,
    fontFamily: Theme.fonts.fontSansBold,
    marginTop: Theme.responsiveSize.size16,
    lineHeight: Theme.responsiveSize.size34,
  },
  textSubTitle: {
    textAlign: 'center',
    color: Theme.colors.textColor6,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    lineHeight: Theme.responsiveSize.size22,
    paddingHorizontal: Theme.responsiveSize.size30,
    marginTop: Theme.responsiveSize.size04,
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: Theme.responsiveSize.size70,
  },
  pinDot: {
    width: Theme.responsiveSize.size14,
    height: Theme.responsiveSize.size14,
    borderRadius: Theme.responsiveSize.size06,
    marginHorizontal: Theme.responsiveSize.size12,
    backgroundColor: Theme.colors.bgColor6,
  },
  pinDotFilled: {
    backgroundColor: Theme.colors.bgColor4,
  },
  keypadContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Theme.responsiveSize.size20,
    marginVertical: Theme.responsiveSize.size20,
  },
  keypadButton: {
    alignItems: 'center',
    width: buttonSize,
    marginVertical: Theme.responsiveSize.size12,
  },
  keypadText: {
    textAlign: 'center',
    width: buttonSize,
    fontSize: Theme.responsiveSize.size24,
    color: Theme.colors.textColor1,
    fontFamily: Theme.fonts.fontSansRegular,
  },
});

export default styles;
