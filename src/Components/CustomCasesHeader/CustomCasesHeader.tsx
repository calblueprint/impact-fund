import { Image } from 'react-native';

export default function CustomCasesHeader(
  button: Element,
  image: Element,
  rightItem: Element,
) {
  return (
    <Image
      source={require('../../../assets/inline-logo.jpeg')}
      style={{ width: 120, height: 15 }}
    />
  );
}
