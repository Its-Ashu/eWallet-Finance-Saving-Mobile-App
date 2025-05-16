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
  },
  viewRisk: {
    backgroundColor: Theme.colors.bgColor2,
    borderColor: Theme.colors.bgColor14,
    borderWidth: Theme.responsiveSize.size01,
    borderRadius: Theme.responsiveSize.size14,
    paddingHorizontal: Theme.responsiveSize.size22,
    paddingVertical: Theme.responsiveSize.size14,
    marginRight: Theme.responsiveSize.size08,
  },
  textRisk: {
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor1,
  },
  textAmount: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size34,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLowRisk: {
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor13,
    marginRight: Theme.responsiveSize.size06,
  },
  iconInfo: {
    height: Theme.responsiveSize.size22,
    width: Theme.responsiveSize.size22,
  },
  viewTotalEarned: {
    backgroundColor: Theme.colors.bgColor9,
    borderRadius: Theme.responsiveSize.size38,
    padding: Theme.responsiveSize.size22,
    paddingHorizontal: Theme.responsiveSize.size26,
    marginTop: Theme.responsiveSize.size34,
    marginHorizontal: Theme.responsiveSize.size20,
  },
  viewRowTotal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTotalEarned: {
    flex: 1,
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
  },
  textDate: {
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor1,
  },
  graphImage: {
    height: width / 2,
    width: width - Theme.responsiveSize.size100,
  },
  viewTracking: {
    backgroundColor: Theme.colors.bgColor9,
    borderRadius: Theme.responsiveSize.size38,
    paddingVertical: Theme.responsiveSize.size30,
    paddingHorizontal: Theme.responsiveSize.size26,
    marginVertical: Theme.responsiveSize.size22,
    marginHorizontal: Theme.responsiveSize.size20,
  },
});

export default styles;
