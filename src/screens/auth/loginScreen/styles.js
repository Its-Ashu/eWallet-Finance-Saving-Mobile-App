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
    marginVertical: Theme.responsiveSize.size40,
  },
  textTitle: {
    letterSpacing: -0.8,
    textAlign: 'center',
    color: Theme.colors.textColor1,
    marginTop: Theme.responsiveSize.size16,
    fontSize: Theme.responsiveSize.size32,
    fontFamily: Theme.fonts.fontSansBold,
  },
  textSubTitle: {
    paddingHorizontal: Theme.responsiveSize.size20,
    lineHeight: Theme.responsiveSize.size24,
    marginTop: Theme.responsiveSize.size04,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor6,
    letterSpacing: -0.3,
    textAlign: 'center',
  },
  viewRow: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: Theme.responsiveSize.size20,
  },
  textPassword: {
    flex: 1,
    letterSpacing: -0.32,
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
  },
  viewButton: {
    backgroundColor: Theme.colors.bgColor4,
  },
});

export default styles;
