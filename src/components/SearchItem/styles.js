import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  viewMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Theme.responsiveSize.size08,
  },
  viewIcon: {
    backgroundColor: Theme.colors.bgColor9,
    borderRadius: Theme.responsiveSize.size10,
    padding: Theme.responsiveSize.size08,
  },
  iconImage: {
    height: Theme.responsiveSize.size32,
    width: Theme.responsiveSize.size32,
  },
  textTitle: {
    flex: 1,
    fontFamily: Theme.fonts.fontSansBold,
    fontSize: Theme.responsiveSize.size13,
    color: Theme.colors.textColor1,
    marginHorizontal: Theme.responsiveSize.size14,
  },
  viewPrice: {
    backgroundColor: Theme.colors.bgColor11,
    borderRadius: Theme.responsiveSize.size10,
    paddingHorizontal: Theme.responsiveSize.size10,
    paddingVertical: Theme.responsiveSize.size06,
  },
  textSubTitle: {
    fontFamily: Theme.fonts.fontSansMedium,
    fontSize: Theme.responsiveSize.size13,
    color: Theme.colors.textColor7,
    lineHeight: Theme.responsiveSize.size22,
  },
});

export default styles;
