import {StyleSheet} from 'react-native';
import Theme from '../../theme/Theme';

const styles = StyleSheet.create({
  card: {
    backgroundColor: Theme.colors.bgColor9,
    borderRadius: Theme.responsiveSize.size38,
    paddingVertical: Theme.responsiveSize.size30,
    paddingHorizontal: Theme.responsiveSize.size26,
    marginVertical: Theme.responsiveSize.size22,
    marginHorizontal: Theme.responsiveSize.size20,
  },
  svgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  stats: {
    marginTop: Theme.responsiveSize.size20,
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Theme.responsiveSize.size08,
  },
  label: {
    color: Theme.colors.textColor12,
    fontSize: Theme.responsiveSize.size12,
    fontFamily: Theme.fonts.fontSansMedium,
    textAlignVertical: 'center',
  },
  value: {
    color: Theme.colors.textColor1,
    fontSize: Theme.responsiveSize.size12,
    fontFamily: Theme.fonts.fontSansBold,
  },
  valueWithTag: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tag: {
    fontWeight: 'bold',
    color: Theme.colors.textColor7,
    fontSize: Theme.responsiveSize.size12,
    backgroundColor: Theme.colors.bgColor11,
    paddingHorizontal: Theme.responsiveSize.size08,
    paddingVertical: Theme.responsiveSize.size04,
    borderRadius: Theme.responsiveSize.size06,
    marginLeft: Theme.responsiveSize.size06,
    lineHeight: Theme.responsiveSize.size22,
  },
  divider: {
    width: '100%',
    height: Theme.responsiveSize.size01,
    backgroundColor: Theme.colors.bgColor14,
    marginVertical: Theme.responsiveSize.size06,
  },
});
export default styles;
