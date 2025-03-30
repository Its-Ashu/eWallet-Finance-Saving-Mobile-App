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
    marginTop: Theme.responsiveSize.size30,
  },
  textTitle: {
    textAlign: 'center',
    letterSpacing: -0.8,
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size24,
    fontFamily: Theme.fonts.fontSansBold,
    marginTop: Theme.responsiveSize.size16,
    lineHeight: Theme.responsiveSize.size34,
    paddingHorizontal: Theme.responsiveSize.size04,
  },
  textSubTitle: {
    textAlign: 'center',
    letterSpacing: -0.3,
    color: Theme.colors.textColor6,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    lineHeight: Theme.responsiveSize.size22,
    paddingHorizontal: Theme.responsiveSize.size30,
    marginTop: Theme.responsiveSize.size04,
  },
  viewMainScan: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Theme.responsiveSize.size50,
  },
  viewScan: {
    // flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    padding: Theme.responsiveSize.size24,
    backgroundColor: Theme.colors.bgColor1,
    borderRadius: Theme.responsiveSize.size100,
  },
  scanIcon: {
    height: Theme.responsiveSize.size30,
    width: Theme.responsiveSize.size30,
  },
});

export default styles;
