import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  viewMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Theme.responsiveSize.size20,
  },
  viewIcon: {
    backgroundColor: Theme.colors.bgColor9,
    borderRadius: Theme.responsiveSize.size60,
    padding: Theme.responsiveSize.size10,
  },
  iconImage: {
    height: Theme.responsiveSize.size22,
    width: Theme.responsiveSize.size22,
  },
  textTitle: {
    flex: 1,
    fontFamily: Theme.fonts.fontSansBold,
    fontSize: Theme.responsiveSize.size13,
    color: Theme.colors.textColor1,
    marginHorizontal: Theme.responsiveSize.size14,
  },
  nextIcon: {
    height: Theme.responsiveSize.size22,
    width: Theme.responsiveSize.size22,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: Theme.colors.bgColor14,
    marginVertical: Theme.responsiveSize.size14,
    marginHorizontal: Theme.responsiveSize.size20,
  },
});

export default styles;
