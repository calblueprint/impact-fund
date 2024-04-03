import { StyleSheet } from 'react-native';

import { colors } from '../../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
  },
  centerContainer: {
    alignItems: 'flex-start',
    width: '85%',
    height: '85%',
    //backgroundColor: colors.darkGreen,
  },
  titleText: {
    fontSize: 35,
    marginVertical: 60,
    fontWeight: '800',
  },
  infoContainer: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
    //backgroundColor: colors.darkGreen,
  },
  infoText: {
    fontSize: 16,
    flexWrap: 'wrap',
    width: '84%',
    fontWeight: '300',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 26,
  },
  button: {
    backgroundColor: colors.white,
    borderRadius: 3,
    borderColor: colors.black,
    borderWidth: 1,
    width: 150,
    height: 51,
    padding: 16,
    flexDirection: 'row',
    marginVertical: 7,
    marginHorizontal: 10,
  },
  buttonBlack: {
    backgroundColor: colors.black,
    borderRadius: 3,
    borderColor: colors.black,
    borderWidth: 1,
    width: 150,
    height: 51,
    padding: 16,
    flexDirection: 'row',
    marginVertical: 7,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 15,
    color: colors.white,
  },
  buttonTextBlack: {
    fontSize: 15,
    //marginHorizontal: 105,
  },
});
