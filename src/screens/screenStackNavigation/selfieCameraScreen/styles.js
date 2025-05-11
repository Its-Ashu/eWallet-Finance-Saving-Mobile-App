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
  cameraPreview: {
    ...StyleSheet.absoluteFillObject,
    zIndex: -1,
    borderRadius: Theme.responsiveSize.size10,
  },
  viewHeader: {
    position: 'absolute',
    top: Theme.responsiveSize.size20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Theme.responsiveSize.size20,
    zIndex: 10,
  },
  textHeaderTitle: {
    fontSize: Theme.responsiveSize.size18,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
  },
  viewCameraOverlay: {
    position: 'absolute',
    top: '30%',
    width: '100%',
    alignItems: 'center',
    zIndex: 5,
  },
  viewCameraFrame: {
    width: Theme.responsiveSize.size280,
    height: Theme.responsiveSize.size180,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: Theme.responsiveSize.size20,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  textSubtitle: {
    color: '#fff',
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    marginTop: Theme.responsiveSize.size10,
    textAlign: 'center',
  },
  viewBottomControls: {
    position: 'absolute',
    bottom: Theme.responsiveSize.size30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewCaptureButton: {
    width: Theme.responsiveSize.size70,
    height: Theme.responsiveSize.size70,
    borderRadius: Theme.responsiveSize.size35,
    borderWidth: 5,
    borderColor: '#fff',
    backgroundColor: 'transparent',
  },
});

export default styles;
