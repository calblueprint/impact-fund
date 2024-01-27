import { StyleSheet } from 'react-native';

import { colors } from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: colors.white,
  },
  headerContainer: {
    flex: 0.4,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '90%',
    paddingLeft: 10,
  },
  casesContainer: {
    flex: 0.6,
    flexDirection: 'column',
    width: '90%',
  },
  caseText: {
    color: colors.black,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cameraText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
  },
  camera: {
    flexDirection: 'row',
    width: 353,
    height: 57,
    borderColor: colors.midGrey,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    paddingHorizontal: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    shadowColor: colors.midGrey,
    shadowOffset: { width: 0.05, height: 0.75 },
    shadowOpacity: 1,
    shadowRadius: 0.75,
    elevation: 1,
    backgroundColor: colors.white,
  },
});
