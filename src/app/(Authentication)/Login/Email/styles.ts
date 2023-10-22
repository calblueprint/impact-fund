import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backText: {
    color: '#000',
    fontSize: 16,
    opacity: 0.3,
    fontWeight: '400',
  },
  backButton: {
    marginTop: 120,
    marginBottom: 40,
    marginRight: 309,
    padding: 10,
  },
  instructionText: {
    color: '#000',
    fontSize: 24,
    fontWeight: '800',
    marginRight: 18,
  },
  input: {
    marginTop: 100,
    marginBottom: 100,
    height: 40,
    margin: 18,
    borderWidth: 1,
    padding: 10,
    width: 310,
    borderRadius: 5,
    borderColor: '#C5C5C5',
  },
  nextButton: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: '20%',
    borderRadius: 3,
    borderColor: '#000000',
    borderWidth: 1,
    width: 310,
    height: 50,
    padding: 15,
    opacity: 0.3,
  },
  errorMessage: {
    color: '#920E1A',
    fontSize: 16,
    fontWeight: '400',
    border: 30,
  },
});
