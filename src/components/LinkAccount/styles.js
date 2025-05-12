import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  viewAccountCard: {
    backgroundColor: Theme.colors.bgColor9,
    borderRadius: Theme.responsiveSize.size38,
    padding: Theme.responsiveSize.size22,
    marginVertical: Theme.responsiveSize.size24,
    marginHorizontal: Theme.responsiveSize.size20,
  },
  cardIcon: {
    alignSelf: 'center',
    height: Theme.responsiveSize.size100,
    width: Theme.responsiveSize.size100,
    marginTop: Theme.responsiveSize.size18,
  },
  textFeatureTitle: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size22,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
    letterSpacing: -0.8,
    lineHeight: Theme.responsiveSize.size34,
  },
  textFeatureSubTitle: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor6,
    letterSpacing: -0.3,
    lineHeight: Theme.responsiveSize.size22,
    paddingVertical: Theme.responsiveSize.size04,
  },
});

export default styles;
