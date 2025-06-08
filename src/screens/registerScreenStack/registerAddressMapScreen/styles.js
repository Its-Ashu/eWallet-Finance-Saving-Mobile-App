import {Dimensions, StyleSheet} from 'react-native';
import Theme from '../../../theme/Theme';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  viewMainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.bgColor2,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.bgColor2,
  },
  paddingH20: {
    paddingHorizontal: Theme.responsiveSize.size20,
  },
  viewTop: {
    marginTop: Theme.responsiveSize.size16,
  },
  textTitle: {
    marginTop: Theme.responsiveSize.size12,
    fontSize: Theme.responsiveSize.size24,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
    letterSpacing: -0.8,
    textAlign: 'center',
  },
  viewSearchLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Theme.colors.borderColor5,
    borderWidth: Theme.responsiveSize.size01,
    borderRadius: Theme.responsiveSize.size16,
    paddingHorizontal: Theme.responsiveSize.size18,
    paddingVertical: Theme.responsiveSize.size06,
    marginVertical: Theme.responsiveSize.size08,
    marginTop: Theme.responsiveSize.size24,
  },
  locationIcon: {
    height: Theme.responsiveSize.size24,
    width: Theme.responsiveSize.size24,
  },
  inputSearch: {
    flex: 1,
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansMedium,
    letterSpacing: -0.4,
    paddingHorizontal: Theme.responsiveSize.size08,
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paddingV8: {
    paddingVertical: Theme.responsiveSize.size08,
  },
  viewMap: {
    marginVertical: 8,
  },
  mapImage: {
    height: Theme.responsiveSize.size180,
    width: width,
  },
  homeIcon: {
    height: Theme.responsiveSize.size22,
    width: Theme.responsiveSize.size22,
  },
  textCommon: {
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansMedium,
    letterSpacing: -0.4,
    marginHorizontal: Theme.responsiveSize.size08,
  },
  viewZoomInOut: {},
  textSubTitle: {
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size20,
    fontFamily: Theme.fonts.fontSansBold,
    letterSpacing: -0.4,
    paddingVertical: Theme.responsiveSize.size16,
  },
  separator: {
    backgroundColor: '#0404151A',
    width: '100%',
    height: 1,
    marginVertical: Theme.responsiveSize.size12,
  },
});

export default styles;
