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
    height: '74%',
    //backgroundColor: colors.darkGreen,
  },
  titleText: {
    fontSize: 35,
    marginVertical: 60,
    fontWeight: '800',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
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
  },
  button: {
    backgroundColor: colors.white,
    borderRadius: 3,
    borderColor: colors.black,
    borderWidth: 1,
    width: 317,
    height: 45,
    padding: 14,
    flexDirection: 'row',
    marginVertical: 7,
  },
  buttonBlack: {
    backgroundColor: colors.black,
    borderRadius: 3,
    borderColor: colors.black,
    borderWidth: 1,
    width: 317,
    height: 45,
    padding: 14,
    flexDirection: 'row',
    marginVertical: 7,
  },
  buttonText: {
    fontSize: 15,
    //marginHorizontal: 108,
    color: colors.white,
    marginTop: -1,
  },
  buttonTextBlack: {
    fontSize: 15,
    //marginHorizontal: 105,
    marginTop: -2,
  },
  center: {
    flexDirection: 'row',
    marginHorizontal: 95,
  },
});
