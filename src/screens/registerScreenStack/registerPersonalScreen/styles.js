import {StyleSheet} from 'react-native';
import Theme from '../../../theme/Theme';

const styles = StyleSheet.create({
  viewMainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.bgColor2,
  },
  viewTop: {
    marginVertical: Theme.responsiveSize.size26,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.bgColor2,
    paddingHorizontal: Theme.responsiveSize.size20,
  },
  textTitle: {
    marginTop: Theme.responsiveSize.size16,
    fontSize: Theme.responsiveSize.size24,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
    letterSpacing: -0.8,
    textAlign: 'center',
  },
  textSubTitle: {
    paddingHorizontal:Theme.responsiveSize.size20,
    lineHeight:Theme.responsiveSize.size24,
    marginTop: Theme.responsiveSize.size04,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor6,
    letterSpacing: -0.3,
    textAlign: 'center',
  },
  marginT24:{
    marginTop:Theme.responsiveSize.size24
  },
});

export default styles;
