import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  outerScroll: {
    height: '100%',
    width: '92%',
  },
  innerScroll: {
    alignItems: 'center',
    rowGap: 20,
    paddingBottom: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    paddingVertical: 12,
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
