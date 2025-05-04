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
    width: width,
    backgroundColor: Theme.colors.bgColor2,
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  appImage: {
    height: width + Theme.responsiveSize.size48,
    width: width,
  },
  viewDarkIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      {translateX: -Theme.responsiveSize.size100},
      {translateY: -Theme.responsiveSize.size100},
    ],
  },
  darkIcon: {
    height: Theme.responsiveSize.size200,
    width: Theme.responsiveSize.size200,
  },
  viewMain: {
    flex: 1,
    width: width,
    paddingTop: Theme.responsiveSize.size34,
    paddingHorizontal: Theme.responsiveSize.size25,
  },
  textTitle: {
    letterSpacing: -1,
    textAlign: 'center',
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size32,
    fontFamily: Theme.fonts.fontSansBold,
  },
  textSubTitle: {
    textAlign: 'center',
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    paddingTop: Theme.responsiveSize.size20,
  },
  viewBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: Theme.responsiveSize.size48,
  },
  textButton: {
    textAlign: 'center',
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansBold,
  },
  viewPagination: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeDotStyle: {
    height: Theme.responsiveSize.size08,
    width: Theme.responsiveSize.size08,
    backgroundColor: Theme.colors.bgColor1,
    borderRadius: Theme.responsiveSize.size10,
    marginHorizontal: Theme.responsiveSize.size04,
  },
  inActiveDotStyle: {
    height: Theme.responsiveSize.size08,
    width: Theme.responsiveSize.size08,
    backgroundColor: Theme.colors.bgColor5,
    borderRadius: Theme.responsiveSize.size10,
    marginHorizontal: Theme.responsiveSize.size04,
  },
});

export default styles;
