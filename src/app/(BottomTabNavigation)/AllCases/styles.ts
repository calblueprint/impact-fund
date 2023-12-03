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
    flex: 0.3,
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '90%',
    paddingLeft: 10,
  },
  casesContainer: {
    flex: 0.7,
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
  },
});
