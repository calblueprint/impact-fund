import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '92%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  imageContainer: {
    aspectRatio: 1.9,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopRightRadius: 9,
    borderTopLeftRadius: 9,
  },
  titleContainer: {
    height: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    overflow: 'hidden',
  },
  bottomContainer: {
    height: 41,
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    justifyContent: 'center',
  },
  inLineInfo: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  blurbText: {
    fontSize: 20,
    fontWeight: '700',
  },
  subText: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.50)',
  },
});
