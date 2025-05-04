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
    paddingHorizontal: Theme.responsiveSize.size20,
  },
  viewTop: {
    marginVertical: Theme.responsiveSize.size40,
  },
  textTitle: {
    letterSpacing: -0.8,
    textAlign: 'center',
    color: Theme.colors.textColor1,
    marginTop: Theme.responsiveSize.size16,
    fontSize: Theme.responsiveSize.size32,
    fontFamily: Theme.fonts.fontSansBold,
  },
  viewFeatureCard: {
    backgroundColor: Theme.colors.bgColor9,
    borderRadius: Theme.responsiveSize.size38,
    padding: Theme.responsiveSize.size22,
    marginBottom: Theme.responsiveSize.size22,
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
    color: Theme.colors.textColor13,
    letterSpacing: -0.3,
    lineHeight: Theme.responsiveSize.size22,
    paddingVertical: Theme.responsiveSize.size04,
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Theme.responsiveSize.size18,
  },
  viewPlus: {
    backgroundColor: Theme.colors.bgColor12,
    padding: Theme.responsiveSize.size18,
    borderRadius: Theme.responsiveSize.size50,
  },
  plusIcon: {
    height: Theme.responsiveSize.size22,
    width: Theme.responsiveSize.size22,
  },
  textFeatureCommonTitle: {
    marginLeft: Theme.responsiveSize.size10,
    fontFamily: Theme.fonts.fontSansMedium,
    fontSize: Theme.responsiveSize.size16,
    color: Theme.colors.textColor7,
    letterSpacing: -0.4,
  },
});

export default styles;
