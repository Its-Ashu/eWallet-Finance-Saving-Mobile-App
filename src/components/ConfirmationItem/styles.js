import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  viewMain: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Theme.colors.borderColor4,
    minHeight: Theme.responsiveSize.size64,
    borderWidth: Theme.responsiveSize.size01,
    borderRadius: Theme.responsiveSize.size16,
    paddingHorizontal: Theme.responsiveSize.size20,
    paddingVertical: Theme.responsiveSize.size07,
    marginVertical: Theme.responsiveSize.size07,
  },
  textTitle: {
    letterSpacing: -0.3,
    color: Theme.colors.textColor8,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    paddingBottom: Theme.responsiveSize.size03,
  },
  textSubTitle: {
    letterSpacing: -0.3,
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansMedium,
    paddingTop: Theme.responsiveSize.size03,
  },
  textEdit: {
    letterSpacing: -0.3,
    color: Theme.colors.textColor6,
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansMedium,
  },
});

export default styles;
