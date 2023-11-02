import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  scrollContainer: {
    minHeight: '100%',
    width: '84%',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1.75,
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 20,
  },
  blurbContainer: {
    width: '100%',
    borderBottomWidth: 1,
    marginBottom: 20,
    borderColor: colors.midGrey,
  },
  inLineSubInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
    marginTop: 15,
  },
  blurbText: {
    color: colors.black,
    fontSize: 22,
    fontWeight: '700',
  },
  subText: {
    color: colors.darkGrey,
    fontSize: 12,
  },
  summaryText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '200',
    lineHeight: 24,
    marginBottom: 30,
  },
});
