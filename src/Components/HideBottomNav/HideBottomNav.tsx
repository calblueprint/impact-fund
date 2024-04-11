import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function HideBottomNav() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.addListener('blur', async () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          height: 90,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
    });
    navigation.addListener('focus', async () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: { maxHeight: 0, overflow: 'hidden' },
      });
    });
  }, [navigation]);
}
