import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  caseCard: {
    height: 137,
    width: 'auto',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#fff',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    flex: 0.5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  imagePlaceholder: {
    flex: 0.4,
    borderRadius: 10,
  },
  statusContainer: {
    flex: 0.4,
    width: 'auto',
    backgroundColor: '#dcdcdc',
    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },
  statusText: {
    fontSize: 16,
  },
  titleText: {
    flex: 0.6,
  },
});
