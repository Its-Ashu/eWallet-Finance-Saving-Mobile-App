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
  textRecentTitle: {
    flex: 1,
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
  },
  textRecentSeeAll: {
    fontSize: Theme.responsiveSize.size12,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor7,
  },
  viewRecentActivity: {
    minWidth: width / 3.1,
    backgroundColor: Theme.colors.bgColor9,
    borderRadius: Theme.responsiveSize.size22,
    padding: Theme.responsiveSize.size16,
    marginRight: Theme.responsiveSize.size08,
  },
  textRecentSubTitle: {
    fontSize: Theme.responsiveSize.size12,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
    paddingTop: Theme.responsiveSize.size16,
    lineHeight: Theme.responsiveSize.size22,
  },
  viewRecentActivityPrice: {
    alignSelf: 'flex-start',
    backgroundColor: Theme.colors.bgColor11,
    paddingHorizontal: Theme.responsiveSize.size08,
    paddingVertical: Theme.responsiveSize.size04,
    borderRadius: Theme.responsiveSize.size10,
    marginTop: Theme.responsiveSize.size12,
  },
  textPriceRecentActivity: {
    fontSize: Theme.responsiveSize.size12,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor1,
    lineHeight: Theme.responsiveSize.size22,
  },
  viewRecentButton: {
    marginTop: Theme.responsiveSize.size08,
    marginBottom: Theme.responsiveSize.size22,
  },
  textDescription: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size22,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
    lineHeight: Theme.responsiveSize.size32,
    marginTop: Theme.responsiveSize.size22,
  },
  textSubDescription: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size12,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor13,
    lineHeight: Theme.responsiveSize.size22,
    marginTop: Theme.responsiveSize.size04,
  },
  stats: {
    marginTop: Theme.responsiveSize.size20,
    marginHorizontal: Theme.responsiveSize.size20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: Theme.colors.textColor12,
    fontSize: Theme.responsiveSize.size12,
    fontFamily: Theme.fonts.fontSansMedium,
    textAlignVertical: 'center',
  },
  value: {
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size12,
    fontFamily: Theme.fonts.fontSansBold,
  },
  tag: {
    fontWeight: 'bold',
    color: Theme.colors.textColor7,
    fontSize: Theme.responsiveSize.size12,
    backgroundColor: Theme.colors.bgColor11,
    paddingHorizontal: Theme.responsiveSize.size08,
    paddingVertical: Theme.responsiveSize.size04,
    borderRadius: Theme.responsiveSize.size06,
    marginLeft: Theme.responsiveSize.size06,
    lineHeight: Theme.responsiveSize.size22,
  },
  divider: {
    width: '100%',
    height: Theme.responsiveSize.size01,
    backgroundColor: Theme.colors.bgColor14,
    marginVertical: Theme.responsiveSize.size12,
  },
});

export default styles;
