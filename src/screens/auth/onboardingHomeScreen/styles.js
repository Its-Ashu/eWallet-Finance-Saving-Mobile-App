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
    justifyContent: 'center',
    backgroundColor: Theme.colors.bgColor1,
  },
  appImage: {
    height: width,
    width: width,
    marginVertical: Theme.responsiveSize.size46,
  },
  textTitle: {
    letterSpacing: -1,
    textAlign: 'center',
    color: Theme.colors.textColor2,
    fontSize: Theme.responsiveSize.size34,
    fontFamily: Theme.fonts.fontSansBold,
  },
  viewButton:{
    alignItems: 'center',
    backgroundColor: Theme.colors.bgColor4,
    borderRadius:Theme.responsiveSize.size14,
    paddingVertical:Theme.responsiveSize.size14,
    marginVertical:Theme.responsiveSize.size02,
    marginHorizontal:Theme.responsiveSize.size20
  },
  textButton: {
    textAlign: 'center',
    color: Theme.colors.textColor2,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansBold,
  },
});

export default styles;
