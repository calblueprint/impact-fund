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
    // component normally hidden behind bottom tab nav bar with large text summaries
    // TODO: delete when SafeAreaView configured
    marginBottom: 140,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 21,
  },
});
