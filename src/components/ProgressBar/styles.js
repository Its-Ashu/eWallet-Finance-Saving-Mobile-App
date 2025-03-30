import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  viewMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    height: Theme.responsiveSize.size24,
    width: Theme.responsiveSize.size24,
  },
  viewProgress: {
    alignSelf: 'center',
    width: Theme.responsiveSize.size88,
    backgroundColor: Theme.colors.bgColor6,
    borderRadius: Theme.responsiveSize.size15,
  },
  viewInnerProgress: {
    backgroundColor: Theme.colors.bgColor4,
    height: Theme.responsiveSize.size08,
    width: Theme.responsiveSize.size08,
    borderRadius: Theme.responsiveSize.size10,
  },
});

export default styles;
