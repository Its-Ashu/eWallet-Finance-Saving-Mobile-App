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
    letterSpacing: -0.8,
    textAlign: 'center',
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size32,
    fontFamily: Theme.fonts.fontSansBold,
    marginBottom: Theme.responsiveSize.size14,
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
  nextIcon: {
    height: Theme.responsiveSize.size24,
    width: Theme.responsiveSize.size24,
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
  },
  viewPercent: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.bgColor17,
    paddingHorizontal: Theme.responsiveSize.size08,
    paddingVertical: Theme.responsiveSize.size05,
    borderRadius: Theme.responsiveSize.size10,
    marginRight: Theme.responsiveSize.size07,
  },
  textPercent: {
    fontSize: Theme.responsiveSize.size12,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor15,
    lineHeight: Theme.responsiveSize.size22,
  },
  textCommon: {
    fontSize: Theme.responsiveSize.size12,
    fontFamily: Theme.fonts.fontSansMedium,
    color: Theme.colors.textColor12,
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
