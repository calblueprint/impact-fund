import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 8,

    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 0.125,
    alignItems: 'flex-start',
  },
  textContainer: {
    flex: 0.875,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '100%',
    rowGap: 3,
  },
});
