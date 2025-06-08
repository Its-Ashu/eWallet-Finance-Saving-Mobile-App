import {StyleSheet} from 'react-native';
import Theme from '../../../theme/Theme';

const styles = StyleSheet.create({
  viewMainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.bgColor2,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.bgColor2,
    paddingHorizontal: Theme.responsiveSize.size20,
  },
  viewTop: {
    marginTop: Theme.responsiveSize.size16,
    marginBottom: Theme.responsiveSize.size70,
  },
  textTitle: {
    marginTop: Theme.responsiveSize.size12,
    fontSize: Theme.responsiveSize.size24,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
    letterSpacing: -0.8,
    textAlign: 'center',
  },
  textSubTitle: {
    marginTop: Theme.responsiveSize.size04,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor6,
    letterSpacing: -0.3,
    textAlign: 'center',
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewOTP: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Theme.responsiveSize.size56,
    width: Theme.responsiveSize.size56,
    borderColor: Theme.colors.borderColor4,
    borderWidth: Theme.responsiveSize.size01,
    borderRadius: Theme.responsiveSize.size16,
    marginHorizontal: Theme.responsiveSize.size07,
  },
  textInput: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
  },
  textResend: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor7,
    marginTop: Theme.responsiveSize.size26,
  },
});

export default styles;
