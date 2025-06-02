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
    marginVertical: Theme.responsiveSize.size16,
  },
  textTitle: {
    marginTop: Theme.responsiveSize.size16,
    fontSize: Theme.responsiveSize.size24,
    fontFamily: Theme.fonts.fontSansBold,
    color: Theme.colors.textColor1,
    letterSpacing: -0.8,
    textAlign: 'center',
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  marginT24: {
    marginTop: Theme.responsiveSize.size24,
  },
  viewButton: {
    backgroundColor: Theme.colors.bgColor1,
    paddingHorizontal: Theme.responsiveSize.size24,
    paddingVertical: Theme.responsiveSize.size18 + 1,
  },
});

export default styles;
