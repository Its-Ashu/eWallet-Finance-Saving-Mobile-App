import {StyleSheet} from 'react-native';
import Theme from '../../../theme/Theme';

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
    paddingHorizontal: Theme.responsiveSize.size20,
  },
  viewTop: {
    marginTop: Theme.responsiveSize.size16,
    marginBottom: Theme.responsiveSize.size70,
  },
  textTitle: {
    textAlign: 'center',
    letterSpacing: -0.8,
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size24,
    fontFamily: Theme.fonts.fontSansBold,
    marginTop: Theme.responsiveSize.size08,
    lineHeight: Theme.responsiveSize.size34,
  },
  textSubTitle: {
    textAlign: 'center',
    letterSpacing: -0.3,
    color: Theme.colors.textColor6,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    lineHeight: Theme.responsiveSize.size22,
    paddingHorizontal: Theme.responsiveSize.size30,
    marginTop: Theme.responsiveSize.size04,
  },
  viewButton: {
    marginHorizontal: 0,
    marginVertical: Theme.responsiveSize.size20,
  },

  //Modal Styles
  modalContainer: {
    flex: 1,
    paddingHorizontal: Theme.responsiveSize.size20,
    backgroundColor: Theme.colors.bgColor28,
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    position: 'absolute',
    bottom: Theme.responsiveSize.size22,
    backgroundColor: Theme.colors.bgColor2,
    borderRadius: Theme.responsiveSize.size40,
    paddingHorizontal: Theme.responsiveSize.size30,
  },
  modalIconContainer: {
    alignItems: 'center',
    marginTop: Theme.responsiveSize.size80,
  },
  modalIcon: {
    width: Theme.responsiveSize.size200,
    height: Theme.responsiveSize.size200,
  },
  viewMiddleModal: {
    marginVertical: Theme.responsiveSize.size50,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size32,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
    marginBottom: Theme.responsiveSize.size24,
  },
  modalSubTitle: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor6,
    lineHeight: Theme.responsiveSize.size24,
  },
  modalButton: {
    backgroundColor: Theme.colors.primary,
    paddingVertical: Theme.responsiveSize.size14,
    paddingHorizontal: Theme.responsiveSize.size40,
    borderRadius: Theme.responsiveSize.size30,
  },
  modalButtonText: {
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.bgColor1,
  },
});

export default styles;
