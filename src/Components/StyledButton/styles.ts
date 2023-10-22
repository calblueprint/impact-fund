import { StyleSheet } from 'react-native';

import { colors } from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 19,
    color: colors.black,
    alignSelf: 'center',
    fontWeight: '600',
    textTransform: 'uppercase',
  },

  buttonContainer: {
    backgroundColor: colors.midGrey,
    width: 325,
    height: 80,
    justifyContent: 'center',
    borderRadius: 3,
    borderColor: '#000000',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 10,
  },
});
