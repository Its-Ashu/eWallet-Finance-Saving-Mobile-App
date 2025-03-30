import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  viewMain: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.bgColor2,
    paddingVertical: Theme.responsiveSize.size18,
  },
  flagIcon: {
    height: Theme.responsiveSize.size40,
    width: Theme.responsiveSize.size40,
  },
  textTitle: {
    flex: 1,
    letterSpacing: -0.3,
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansMedium,
    marginHorizontal: Theme.responsiveSize.size10,
  },
  textSubTitle: {
    letterSpacing: -0.3,
    color: Theme.colors.textColor4,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
  },
});

export default styles;
