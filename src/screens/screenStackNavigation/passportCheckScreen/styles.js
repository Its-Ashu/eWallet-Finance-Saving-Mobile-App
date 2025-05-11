import {Dimensions, StyleSheet} from 'react-native';
import Theme from '../../../theme/Theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  viewMainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.bgColor1,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.colors.bgColor2,
    paddingHorizontal: Theme.responsiveSize.size20,
  },
  viewTop: {
    marginTop: Theme.responsiveSize.size30,
    marginBottom: Theme.responsiveSize.size70,
  },
  textTitle: {
    textAlign: 'center',
    letterSpacing: -0.8,
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size24,
    fontFamily: Theme.fonts.fontSansBold,
    marginTop: Theme.responsiveSize.size16,
    lineHeight: Theme.responsiveSize.size34,
  },
  textSubTitle: {
    textAlign: 'center',
    letterSpacing: -0.3,
    color: Theme.colors.textColor6,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    lineHeight: Theme.responsiveSize.size22,
    marginTop: Theme.responsiveSize.size04,
  },
  viewPassport: {
    backgroundColor: Theme.colors.bgColor14,
    height: 208,
    borderRadius: Theme.responsiveSize.size14,
  },
  viewSelfie: {
    alignSelf: 'center',
    backgroundColor: Theme.colors.bgColor14,
    height: 240,
    width: 240,
    borderRadius: Theme.responsiveSize.size14,
  },
});

export default styles;
