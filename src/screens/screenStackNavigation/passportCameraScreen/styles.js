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
    backgroundColor: Theme.colors.textColor17,
  },
  overlay: {
    position: 'absolute',
    top: '25%',
    alignItems: 'center',
    paddingHorizontal: Theme.responsiveSize.size20,
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: Theme.responsiveSize.size20,
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    height: Theme.responsiveSize.size22,
    width: Theme.responsiveSize.size22,
  },
  textTitle: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size20,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor2,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLoading: {
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansBold,
  },
  viewMiddle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame: {
    width: width - Theme.responsiveSize.size40,
    height: width * 0.6,
    borderRadius: Theme.responsiveSize.size14,
    borderWidth: Theme.responsiveSize.size02,
    borderColor: Theme.colors.borderColor6,
    backgroundColor: Theme.colors.transparent,
  },
  instructionTitle: {
    marginTop: Theme.responsiveSize.size28,
    fontSize: Theme.responsiveSize.size22,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor2,
    lineHeight: Theme.responsiveSize.size30,
  },
  instructionText: {
    textAlign: 'center',
    color: Theme.colors.textColor2,
    fontFamily: Theme.fonts.fontSansMedium,
    fontSize: Theme.responsiveSize.size12,
    marginTop: Theme.responsiveSize.size04,
    lineHeight: Theme.responsiveSize.size22,
  },
  bottomBar: {
    bottom: 40,
    width: width,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: Theme.responsiveSize.size24,
  },
  flashButton: {
    backgroundColor: Theme.colors.bgColor2,
    padding: Theme.responsiveSize.size14,
    borderRadius: Theme.responsiveSize.size30,
  },
  flashIcon: {
    height: Theme.responsiveSize.size20,
    width: Theme.responsiveSize.size20,
  },
  captureButton: {
    width: Theme.responsiveSize.size65,
    height: Theme.responsiveSize.size65,
    borderRadius: Theme.responsiveSize.size62,
    borderWidth: Theme.responsiveSize.size02,
    borderColor: Theme.colors.borderColor7,
  },
});

export default styles;
