import {Dimensions, StyleSheet} from 'react-native';
import Theme from '../../../theme/Theme';

const {width, height} = Dimensions.get('window');

const FRAME_WIDTH = width - Theme.responsiveSize.size70;
const FRAME_HEIGHT = height * 0.36;
const frameX = width - FRAME_WIDTH;
const frameY = height * 0.2;

const styles = StyleSheet.create({
  viewMainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: Theme.colors.transparent,
  },
  container: {
    flex: 1,
    backgroundColor: Theme.colors.transparent,
  },
  overlayDim: {
    flex: 1,
    backgroundColor: Theme.colors.transparent,
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
    position: 'absolute',
    top: height * 0.56,
    alignSelf: 'center',
  },
  frame: {
    position: 'absolute',
    top: frameY,
    left: frameX,
    width: FRAME_WIDTH,
    height: FRAME_HEIGHT,
    borderColor: Theme.colors.borderColor6,
    borderRadius: Theme.responsiveSize.size14,
    borderWidth: Theme.responsiveSize.size02,
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

  overlayContainer: {
    position: 'absolute',
    top: height * 0.2,
    left: width * 0.2,
    width: width * 0.6,
    height: width * 0.75,
    borderRadius: width * 0.4,
    borderWidth: 2,
    borderColor: Theme.colors.borderColor6,
    zIndex: 5,
  },
  circleMask: {
    flex: 1,
    borderRadius: width * 0.5,
  },
  overlayTop: {
    position: 'absolute',
    width: width,
    height: height,
    // backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  overlayBottom: {
    position: 'absolute',
    top: frameY + FRAME_HEIGHT,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: Theme.colors.textColor17,
  },
  overlayLeft: {
    position: 'absolute',
    top: frameY,
    left: 0,
    width: frameX,
    height: FRAME_HEIGHT,
    backgroundColor: Theme.colors.textColor17,
  },
  overlayRight: {
    position: 'absolute',
    top: frameY,
    right: 0,
    width: frameX,
    height: FRAME_HEIGHT,
    backgroundColor: Theme.colors.textColor17,
  },
  middleRow: {
    flexDirection: 'row',
    height: FRAME_HEIGHT,
  },
  overlaySide: {
    width: frameX,
    backgroundColor: Theme.colors.textColor17,
  },
  transparentFrame: {
    width: FRAME_WIDTH,
    height: FRAME_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frameBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: FRAME_WIDTH,
    height: FRAME_HEIGHT,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default styles;
