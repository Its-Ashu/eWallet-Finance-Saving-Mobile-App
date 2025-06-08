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
    flex: 1,
    position: 'absolute',
    backgroundColor: Theme.colors.bgColor1,
    height: width,
    width: '100%',
    zIndex: -1,
    borderBottomEndRadius: Theme.responsiveSize.size34,
    borderBottomStartRadius: Theme.responsiveSize.size34,
  },
  viewTop: {
    paddingTop: Theme.responsiveSize.size32,
    paddingBottom: Theme.responsiveSize.size10,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size32,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor2,
  },
  textSubTitle: {
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
    marginTop: Theme.responsiveSize.size24,
    marginHorizontal: Theme.responsiveSize.size20,
  },
  viewInvitation: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Theme.colors.bgColor9,
    borderRadius: Theme.responsiveSize.size38,
    padding: Theme.responsiveSize.size12,
    paddingRight: Theme.responsiveSize.size26,
    marginHorizontal: Theme.responsiveSize.size20,
    marginTop: Theme.responsiveSize.size14,
  },
  viewCircles: {
    backgroundColor: Theme.colors.bgColor24,
    borderRadius: Theme.responsiveSize.size38,
    padding: Theme.responsiveSize.size14,
  },
  circleIcon: {
    height: Theme.responsiveSize.size70,
    width: Theme.responsiveSize.size70,
  },
  textInviteTitle: {
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
    lineHeight: Theme.responsiveSize.size26,
    marginLeft: Theme.responsiveSize.size22,
    marginRight: Theme.responsiveSize.size06,
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
  viewRowMain: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: Theme.responsiveSize.size20,
    marginTop: Theme.responsiveSize.size38,
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
});

export default styles;
