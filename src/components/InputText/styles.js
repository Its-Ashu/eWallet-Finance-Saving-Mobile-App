import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  viewMain: {
    justifyContent: 'center',
    height: Theme.responsiveSize.size64,
    borderColor: Theme.colors.borderColor5,
    borderWidth: Theme.responsiveSize.size01,
    borderRadius: Theme.responsiveSize.size16,
    marginVertical: Theme.responsiveSize.size04,
    paddingHorizontal: Theme.responsiveSize.size16,
  },
  textTitle: {
    position: 'absolute',
    letterSpacing: -0.3,
    color: Theme.colors.textColor8,
    left: Theme.responsiveSize.size20,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
  },
  textInput: {
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansMedium,
  },
  iconImage: {
    height: Theme.responsiveSize.size36,
    width: Theme.responsiveSize.size36,
  },
});

export default styles;
