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
  scrollView: {
    flexGrow: 1,
    paddingBottom: Theme.responsiveSize.size20,
  },
  viewTop: {
    marginTop: Theme.responsiveSize.size30,
    marginBottom: Theme.responsiveSize.size95,
  },
  textTitle: {
    marginVertical: Theme.responsiveSize.size16,
    letterSpacing: -Theme.responsiveSize.size01,
    fontSize: Theme.responsiveSize.size32,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
    textAlign: 'center',
  },
  viewTextInput: {
    borderRadius: Theme.responsiveSize.size16,
    borderColor: Theme.colors.borderColor4,
    borderWidth: Theme.responsiveSize.size01,
    paddingHorizontal: Theme.responsiveSize.size16,
    paddingVertical: Theme.responsiveSize.size12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagIcon: {
    height: Theme.responsiveSize.size32,
    width: Theme.responsiveSize.size32,
  },
  downIcon: {
    height: Theme.responsiveSize.size24,
    width: Theme.responsiveSize.size24,
    marginLeft: Theme.responsiveSize.size08,
  },
  textCountryNo: {
    letterSpacing: -0.4,
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansBold,
    marginHorizontal: Theme.responsiveSize.size16,
  },
  textInput: {
    flex: 1,
    letterSpacing: -0.4,
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size16,
    fontFamily: Theme.fonts.fontSansBold,
  },
  textViewLogIn: {
    alignItems: 'center',
    marginVertical: Theme.responsiveSize.size10,
  },
  textCommon: {
    letterSpacing: -0.3,
    color: Theme.colors.textColor6,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    marginHorizontal: Theme.responsiveSize.size05,
  },
  textBold: {
    letterSpacing: -0.3,
    color: Theme.colors.textColor7,
    fontSize: Theme.responsiveSize.size15,
    fontFamily: Theme.fonts.fontSansBold,
  },
  viewBottom: {
    alignItems: 'center',
    margin: Theme.responsiveSize.size15,
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewGoogle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Theme.responsiveSize.size16,
    borderColor: Theme.colors.borderColor4,
    borderWidth: Theme.responsiveSize.size01,
    padding: Theme.responsiveSize.size16,
    margin: Theme.responsiveSize.size08,
  },
  appleIcon: {
    alignSelf: 'center',
    height: Theme.responsiveSize.size24,
    width: Theme.responsiveSize.size24,
  },
  textSubTitle: {
    textAlign: 'center',
    letterSpacing: -0.3,
    color: Theme.colors.textColor4,
    fontSize: Theme.responsiveSize.size14,
    marginTop: Theme.responsiveSize.size24,
    fontFamily: Theme.fonts.fontSansSemiBold,
    marginHorizontal: Theme.responsiveSize.size20,
  },
  viewMain: {
    zIndex: 0,
    backgroundColor: Theme.colors.bgColor2,
    borderTopLeftRadius: Theme.responsiveSize.size38,
    borderTopRightRadius: Theme.responsiveSize.size38,
    paddingHorizontal: Theme.responsiveSize.size20,
    paddingTop: Theme.responsiveSize.size40,
  },
  backdrop: {
    flex: 1,
    backgroundColor: Theme.colors.bgColor8,
  },
  sheetContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '90%',
    backgroundColor: '#fff',
    borderTopLeftRadius: Theme.responsiveSize.size40,
    borderTopRightRadius: Theme.responsiveSize.size40,
  },
  viewDraggable: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
    top: -Theme.responsiveSize.size12,
  },
  draggableIcon: {
    width: Theme.responsiveSize.size200,
    height: Theme.responsiveSize.size25,
  },
  viewSearchTextInput: {
    flex: 1,
    borderRadius: Theme.responsiveSize.size16,
    borderColor: Theme.colors.borderColor5,
    borderWidth: Theme.responsiveSize.size01,
    paddingHorizontal: Theme.responsiveSize.size20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIcon: {
    height: Theme.responsiveSize.size24,
    width: Theme.responsiveSize.size24,
  },
  textInputSearch: {
    flex: 1,
    letterSpacing: -0.3,
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
  },
  textCancel: {
    letterSpacing: -0.3,
    color: Theme.colors.textColor7,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansMedium,
    marginLeft: Theme.responsiveSize.size12,
  },
});

export default styles;
