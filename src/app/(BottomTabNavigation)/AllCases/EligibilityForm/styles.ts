import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  contentContainer: {
    width: '100%',
  },
  flatListContainer: {
    paddingTop: 20,
    width: '100%',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: '6%',
    rowGap: 20,
    borderBottomWidth: 2,
    borderBottomColor: colors.midGrey,
  },
  separatorLine: {
    borderTopWidth: 1,
    borderTopColor: colors.midGrey,
    marginHorizontal: '6%',
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    columnGap: 20,
  },
  footerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    rowGap: 16,
    paddingTop: 20,
    paddingBottom: 25,
    paddingHorizontal: 25,
    borderTopWidth: 2,
    borderTopColor: colors.midGrey,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 20,
    paddingBottom: 20,
  },
  imageContainer: {
    aspectRatio: 1.75,
    borderRadius: 5,
    backgroundColor: colors.lightGrey,
  },
  titleText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listEmptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
