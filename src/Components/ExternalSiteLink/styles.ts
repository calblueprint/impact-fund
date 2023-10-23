import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 54,
    width: 317,
    paddingHorizontal: 20,

    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 21,
  },
});
