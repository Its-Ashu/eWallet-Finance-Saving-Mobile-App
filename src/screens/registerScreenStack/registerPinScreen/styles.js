import {StyleSheet} from 'react-native';
import Theme from '../../../theme/Theme';

const styles = StyleSheet.create({
  viewMainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.bgColor2,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.colors.bgColor2,
    paddingHorizontal: Theme.responsiveSize.size20,
    justifyContent: 'space-between',
  },
  viewTop: {
    marginTop: Theme.responsiveSize.size30,
    alignItems: 'center',
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
    marginVertical: Theme.responsiveSize.size30,
  },
  pinDot: {
    width: Theme.responsiveSize.size14,
    height: Theme.responsiveSize.size14,
    borderRadius: Theme.responsiveSize.size07,
    marginHorizontal: Theme.responsiveSize.size06,
    backgroundColor: Theme.colors.textColor6,
  },
  pinDotFilled: {
    backgroundColor: Theme.colors.bgColor4,
  },
  keypadContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: Theme.responsiveSize.size20,
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginBottom: Theme.responsiveSize.size16,
  },
  keypadButton: {
    width: Theme.responsiveSize.size60,
    height: Theme.responsiveSize.size60,
    borderRadius: Theme.responsiveSize.size30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keypadText: {
    fontSize: Theme.responsiveSize.size24,
    color: Theme.colors.textColor1,
    fontFamily: Theme.fonts.fontSansBold,
  },
  deleteButton: {
    width: Theme.responsiveSize.size40,
    height: Theme.responsiveSize.size40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetText: {
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.primary,
    marginTop: Theme.responsiveSize.size10,
  },
  setupButton: {
    width: '100%',
    paddingVertical: Theme.responsiveSize.size16,
    borderRadius: Theme.responsiveSize.size30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.primary,
  },
  setupButtonText: {
    fontSize: Theme.responsiveSize.size18,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.white,
  },
  setupButtonDisabled: {
    backgroundColor: Theme.colors.textColor6,
  },
});

export default styles;
