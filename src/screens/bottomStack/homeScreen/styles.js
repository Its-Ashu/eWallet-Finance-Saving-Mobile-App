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
  appImage: {
    position: 'absolute',
    height: width + Theme.responsiveSize.size48,
    width: width,
  },
  viewTop: {
    paddingTop: Theme.responsiveSize.size70,
    paddingBottom: Theme.responsiveSize.size35,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size32,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor2,
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Theme.responsiveSize.size08,
  },
  textSubTitle: {
    opacity: 0.7,
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor10,
    marginHorizontal: Theme.responsiveSize.size04,
    letterSpacing: -0.4,
  },
  infoIcon: {
    height: Theme.responsiveSize.size22,
    width: Theme.responsiveSize.size22,
    marginHorizontal: Theme.responsiveSize.size04,
  },
  viewMain: {
    paddingHorizontal: Theme.responsiveSize.size20,
  },
  viewFeatureCard: {
    backgroundColor: Theme.colors.bgColor4,
    borderRadius: Theme.responsiveSize.size38,
    padding: Theme.responsiveSize.size22,
  },
  textFeatureTitle: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size22,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor2,
    letterSpacing: -0.8,
    lineHeight: Theme.responsiveSize.size34,
  },
  textFeatureSubTitle: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor10,
    letterSpacing: -0.3,
    lineHeight: Theme.responsiveSize.size22,
    paddingVertical: Theme.responsiveSize.size04,
  },
  viewPlus: {
    backgroundColor: Theme.colors.textColor11,
    padding: Theme.responsiveSize.size18,
    borderRadius: Theme.responsiveSize.size50,
  },
  plusIcon: {
    height: Theme.responsiveSize.size18,
    width: Theme.responsiveSize.size18,
  },
  textFeatureCommonTitle: {
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor2,
    letterSpacing: -0.4,
    marginLeft: Theme.responsiveSize.size12,
  },
  viewAccountCard: {
    backgroundColor: Theme.colors.bgColor9,
    borderRadius: Theme.responsiveSize.size38,
    padding: Theme.responsiveSize.size22,
    marginVertical: Theme.responsiveSize.size24,
  },
  cardIcon: {
    alignSelf: 'center',
    height: Theme.responsiveSize.size100,
    width: Theme.responsiveSize.size100,
    marginTop: Theme.responsiveSize.size18,
  },
  viewInvitation: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.bgColor9,
    borderRadius: Theme.responsiveSize.size38,
    padding: Theme.responsiveSize.size12,
    paddingRight: Theme.responsiveSize.size26,
    marginBottom: Theme.responsiveSize.size40,
  },
  viewCircles: {
    backgroundColor: Theme.colors.bgColor10,
    borderRadius: Theme.responsiveSize.size38,
    padding: Theme.responsiveSize.size14,
  },
  circleIcon: {
    height: Theme.responsiveSize.size70,
    width: Theme.responsiveSize.size70,
  },
  textInviteTitle: {
    fontSize: Theme.responsiveSize.size18,
    fontFamily: Theme.fonts.fontSansSemiBold,
    color: Theme.colors.textColor1,
    letterSpacing: -0.4,
    lineHeight: Theme.responsiveSize.size28,
  },
  textInviteSubTitle: {
    flex: 1,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor12,
    letterSpacing: -0.3,
    lineHeight: Theme.responsiveSize.size24,
  },
  viewEarn: {
    alignSelf: 'flex-start',
    backgroundColor: Theme.colors.bgColor11,
    borderRadius: Theme.responsiveSize.size12,
    paddingVertical: Theme.responsiveSize.size06,
    paddingHorizontal: Theme.responsiveSize.size10,
  },
  textEarn: {
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor7,
    letterSpacing: -0.3,
    lineHeight: Theme.responsiveSize.size24,
  },
  copyIcon: {
    height: Theme.responsiveSize.size22,
    width: Theme.responsiveSize.size22,
  },
  viewTotalEarned: {
    backgroundColor: Theme.colors.bgColor9,
    borderRadius: Theme.responsiveSize.size38,
    padding: Theme.responsiveSize.size22,
    paddingHorizontal: Theme.responsiveSize.size26,
    marginVertical: Theme.responsiveSize.size24,
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
  viewChartMain: {
    marginVertical: Theme.responsiveSize.size16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dateRange: {
    color: 'gray',
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  monthLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  tooltipContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'center',
    zIndex: 10,
    marginLeft: -Theme.responsiveSize.size07,
  },
  tooltipText: {
    backgroundColor: Theme.colors.textColor7,
    color: Theme.colors.textColor2,
    paddingHorizontal: Theme.responsiveSize.size10,
    paddingVertical: Theme.responsiveSize.size04,
    borderRadius: 12,
    fontSize: Theme.responsiveSize.size12,
    fontFamily: Theme.fonts.fontSansMedium,
    lineHeight: Theme.responsiveSize.size22,
    marginBottom: Theme.responsiveSize.size05,
  },
  tooltipDot: {
    width: Theme.responsiveSize.size12,
    height: Theme.responsiveSize.size12,
    borderRadius: Theme.responsiveSize.size12,
    backgroundColor: Theme.colors.bgColor4,
    borderColor: Theme.colors.bgColor2,
    borderWidth: Theme.responsiveSize.size02,
  },
  viewButton: {
    marginHorizontal: 0,
    marginTop: Theme.responsiveSize.size06,
  },
});

export default styles;
