import { View, Text } from 'react-native';

import { colors } from '../../styles/colors';

interface TabBarItemProps {
  icon: React.ReactNode;
  label: string;
  focused: boolean;
}

//Inline styling required --> can't make a styles.ts in this directory otherwise it'll make a new bottom tab idk why
export default function TabBarItem({ icon, label, focused }: TabBarItemProps) {
  return (
    <View
      style={{
        backgroundColor: focused ? colors.lightRed : 'transparent',
        borderRadius: 10,
        height: 55,
        width: 66,
        marginTop: 10,
      }}
    >
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        {icon}
        <Text
          style={{
            fontSize: 9,
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: 21,
            color: focused ? colors.midRed : colors.midGrey,
          }}
        >
          {label}
        </Text>
      </View>
    </View>
  );
}
