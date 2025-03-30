import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  viewMain: {},
  viewRowMain: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: Theme.responsiveSize.size08,
  },
  viewRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    height: Theme.responsiveSize.size24,
    width: Theme.responsiveSize.size24,
  },
  viewContent: {
    flex: 1,
    paddingHorizontal: Theme.responsiveSize.size08,
  },
  textTitle: {
    fontFamily: Theme.fonts.fontSansMedium,
    letterSpacing: -0.4,
    fontSize: Theme.responsiveSize.size16,
    color: Theme.colors.textColor1,
  },
  textSubTitle: {
    fontFamily: Theme.fonts.fontSansMedium,
    letterSpacing: -0.3,
    fontSize: Theme.responsiveSize.size12,
    color: Theme.colors.textColor6,
    lineHeight:Theme.responsiveSize.size22
  },
});

export default styles;
