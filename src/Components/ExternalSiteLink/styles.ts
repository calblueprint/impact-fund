import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 6,
    paddingHorizontal: 20,
    marginBottom: 30,

    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 21,
  },
});
