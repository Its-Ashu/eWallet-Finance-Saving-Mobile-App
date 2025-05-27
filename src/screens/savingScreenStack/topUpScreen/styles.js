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
    backgroundColor: Theme.colors.bgColor2,
    paddingHorizontal: Theme.responsiveSize.size20,
  },
  viewTop: {
    marginVertical: Theme.responsiveSize.size16,
  },
  textTitle: {
    textAlign: 'center',
    color: Theme.colors.textColor1,
    marginTop: Theme.responsiveSize.size14,
    fontSize: Theme.responsiveSize.size22,
    fontFamily: Theme.fonts.fontSansBold,
    lineHeight: Theme.responsiveSize.size32,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dollarSign: {
    color: Theme.colors.textColor1,
    fontFamily: Theme.fonts.fontSansBold,
    fontSize: Theme.responsiveSize.size32,
    marginBottom: Theme.responsiveSize.size12,
  },
  textInput: {
    color: Theme.colors.textColor1,
    marginBottom: Theme.responsiveSize.size10,
    fontSize: Theme.responsiveSize.size32,
    fontFamily: Theme.fonts.fontSansBold,
  },
  textSubTitle: {
    textAlign: 'center',
    color: Theme.colors.textColor12,
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansMedium,
    marginTop: -Theme.responsiveSize.size12,
    marginBottom: Theme.responsiveSize.size32,
  },

  //Modal Styles
  modalContainer: {
    flex: 1,
    paddingHorizontal: Theme.responsiveSize.size20,
    backgroundColor: Theme.colors.bgColor16,
    alignItems: 'center',
  },
  modalContent: {
    width: '100%',
    height: '82%',
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
    flex: 1,
    marginVertical: Theme.responsiveSize.size50,
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: Theme.responsiveSize.size32,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
    marginBottom: Theme.responsiveSize.size24,
    letterSpacing: -1,
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
  viewButton: {
    marginHorizontal: 0,
    marginVertical: Theme.responsiveSize.size20,
  },
});

export default styles;
