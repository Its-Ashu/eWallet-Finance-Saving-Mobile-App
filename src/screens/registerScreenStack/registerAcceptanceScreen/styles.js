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
});

export default styles;
