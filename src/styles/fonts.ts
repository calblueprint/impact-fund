import { StyleSheet } from 'react-native';

import { colors } from './colors';

const baseFonts = StyleSheet.create({
  tabHeading: {
    fontSize: 32,
    fontWeight: '800',
    fontStyle: 'normal',
    color: colors.black,
  },
  headline: {
    fontSize: 22,
    fontWeight: '700',
    fontStyle: 'normal',
    color: colors.black,
  },
  condensedHeadline: {
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal',
    color: colors.midnightBlack,
  },
  body: {
    fontSize: 16,
    fontWeight: '300',
    fontStyle: 'normal',
    color: colors.black,
  },
  small: {
    fontSize: 14,
    fontWeight: '300',
    fontStyle: 'normal',
    color: colors.black,
  },
  verySmall: {
    fontSize: 12,
    fontWeight: '300',
    fontStyle: 'normal',
    color: colors.black,
  },
  button: {
    fontSize: 17,
    fontWeight: '600',
    fontStyle: 'normal',
  },
});

export const fonts = StyleSheet.create({
  ...baseFonts,
  greyBody: {
    ...baseFonts.body,
    color: colors.darkGrey,
  },
  greySmall: {
    ...baseFonts.small,
    color: colors.darkGrey,
  },
  greyVerySmall: {
    ...baseFonts.verySmall,
    color: colors.darkGrey,
  },
  blackButton: {
    ...baseFonts.button,
    color: colors.black,
  },
  whiteButton: {
    ...baseFonts.button,
    color: colors.white,
  },
  errorMessage: {
    ...baseFonts.small,
    color: colors.midRed,
  },
});
