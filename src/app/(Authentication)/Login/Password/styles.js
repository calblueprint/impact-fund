import { StyleSheet } from 'react-native';

import { colors } from '../../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backText: {
    color: colors.lightGrey,
    fontSize: 16,
    opacity: 0.3,
    fontWeight: '400',
  },
  backButton: {
    marginTop: 100,
    marginBottom: 40,
    marginRight: 280,
    padding: 10,
  },
  button: {
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#339FFF',
    padding: 10,
  },
  input: {
    margin: 12,
    height: 40,
    borderBottomWidth: 2,
    padding: 10,
    width: 310,
    borderRadius: 5,
    borderColor: colors.midGrey,
  },
});
