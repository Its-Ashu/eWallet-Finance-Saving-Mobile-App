import {StyleSheet} from 'react-native';
import Theme from '../../../theme/Theme';

const styles = StyleSheet.create({
  viewMainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.bgColor1,
  },
  container: {
    flex: 1,
  },
  viewCloseIcon: {
    alignItems: 'flex-end',
    marginTop: Theme.responsiveSize.size24,
    marginBottom: Theme.responsiveSize.size12,
    marginRight: Theme.responsiveSize.size20,
  },
  closeIcon: {
    height: Theme.responsiveSize.size22,
    width: Theme.responsiveSize.size22,
  },
  textTitle: {
    textAlign: 'center',
    letterSpacing: -0.8,
    color: Theme.colors.textColor2,
    fontFamily: Theme.fonts.fontSansBold,
    fontSize: Theme.responsiveSize.size32,
    lineHeight: Theme.responsiveSize.size34,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardInner: {
    width: '82%',
    height: '90%',
    backgroundColor: Theme.colors.bgColor2,
    borderRadius: Theme.responsiveSize.size38,
    paddingTop: Theme.responsiveSize.size45,
    paddingBottom: Theme.responsiveSize.size14,
    paddingHorizontal: Theme.responsiveSize.size26,
  },
  iconContainer: {
    alignSelf: 'center',
    backgroundColor: Theme.colors.bgColor25,
    padding: Theme.responsiveSize.size12,
    borderRadius: Theme.responsiveSize.size36,
  },
  goalIcon: {
    height: Theme.responsiveSize.size70,
    width: Theme.responsiveSize.size70,
  },
  goalTitle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Theme.colors.textColor1,
    fontFamily: Theme.fonts.fontSansBold,
    fontSize: Theme.responsiveSize.size32,
    marginTop: Theme.responsiveSize.size36,
    lineHeight: Theme.responsiveSize.size42,
    marginBottom: Theme.responsiveSize.size22,
  },
  goalDescription: {
    flex: 1,
    textAlign: 'center',
    color: Theme.colors.textColor13,
    fontSize: Theme.responsiveSize.size12,
    fontFamily: Theme.fonts.fontSansMedium,
    lineHeight: Theme.responsiveSize.size22,
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: Theme.responsiveSize.size50,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: Theme.colors.textColor1,
    marginHorizontal: 4,
  },
});

export default styles;
