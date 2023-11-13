import { StyleSheet } from 'react-native';
import { colors } from '../../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  image: {
    height: '35%',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },

  blurb: {
    fontSize: 17,
    marginTop: 10,
    marginBottom: 50,
  },

  button: {
    border: 'solid',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.midGrey,
    height: '10%',
    width: '100%',
    borderRadius: 20,
  },

  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
