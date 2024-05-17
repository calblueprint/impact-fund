import { StyleSheet } from 'react-native';

import { colors } from './colors';

export const device = StyleSheet.create({
  safeArea: {
    width: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  content: {
    paddingTop: 40,
    width: '84%',
  },
});

export const shawdowStyles = StyleSheet.create({
  shadowBorder: {
    backgroundColor: colors.white,
    borderColor: colors.midGrey,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,

    shadowColor: colors.midGrey,
    shadowOffset: { width: 0.05, height: 0.75 },
    shadowOpacity: 1,
    shadowRadius: 0.75,
    elevation: 1,
  },
});
