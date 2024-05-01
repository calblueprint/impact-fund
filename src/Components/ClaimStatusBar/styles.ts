import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';
export default StyleSheet.create({
  container: {
    height: 47,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  statusContainer: {
    height: 29,
    width: 177,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'solid',
    borderWidth: 0.3,
    borderRadius: 5,
  },
  claimText: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: 21,
    color: colors.black,
  },
  statusText: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 21,
  },
  icon: {
    marginRight: 10,
  },
});
