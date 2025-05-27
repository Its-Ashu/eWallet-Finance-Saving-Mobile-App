import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  viewMain: {
    marginHorizontal: Theme.responsiveSize.size20,
    marginVertical: Theme.responsiveSize.size02,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.colors.bgColor4,
    borderRadius: Theme.responsiveSize.size14,
    paddingVertical: Theme.responsiveSize.size16,
  },
  plusIcon: {
    height: Theme.responsiveSize.size16,
    width: Theme.responsiveSize.size16,
    marginRight: Theme.responsiveSize.size10,
  },
  buttonText: {
    textAlign: 'center',
    color: Theme.colors.textColor2,
    fontSize: Theme.responsiveSize.size14,
    fontFamily: Theme.fonts.fontSansBold,
    lineHeight: Theme.responsiveSize.size22,
  },
  viewNext: {
    alignItems: 'flex-end',
  },
  nextButton: {
    alignItems: 'center',
    backgroundColor: Theme.colors.bgColor1,
    borderRadius: Theme.responsiveSize.size16,
    padding: Theme.responsiveSize.size16,
  },
  nextIcon: {
    height: Theme.responsiveSize.size24,
    width: Theme.responsiveSize.size24,
  },
});

export default styles;
