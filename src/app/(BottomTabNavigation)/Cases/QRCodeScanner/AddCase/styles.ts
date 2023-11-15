import { StyleSheet } from 'react-native';
import { colors } from '../../../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },

  image: {
    // should use pixels. percentage will change depending on size of scrollview
    height: 200,
    width: '100%',
    marginVertical: 10,
    borderRadius: 5,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  dateAndFirm: {
    height: 30,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.darkGrey,
    marginBottom: 25,
    marginTop: 10,
  },

  dateAndFirmText: {
    color: colors.darkGrey,
    fontSize: 12,
  },

  blurb: {
    fontSize: 16,
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
    height: 75,
    width: '100%',
    borderRadius: 20,
  },

  loading: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
