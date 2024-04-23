import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  requirementContainer: {
    flexDirection: 'row',
    columnGap: 20,
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  innerRequirementBox: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonBase: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: 47,
    borderRadius: 5,
    columnGap: 10,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 16,
    fontStyle: 'normal',
    fontWeight: '300',
  },
  activeText: {
    color: colors.darkGrey,
  },
  inactiveText: {
    color: colors.black,
  },
});
