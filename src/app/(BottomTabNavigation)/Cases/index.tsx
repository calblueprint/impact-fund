import { Link } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import CaseCard from './CaseCard/CaseCard';
import styles from './styles';
import { CaseCardProps } from './types';

function CasesScreen() {
  const [cases, setCases] = useState<CaseCardProps[]>([
    {
      id: 1,
      title: 'One Direction Hiatus',
      status: 'In Progress',
      imageUrl:
        'https://lastfm.freetls.fastly.net/i/u/ar0/a264ce4e962048cac811215a384ecba7.jpg',
    },
    {
      id: 2,
      title: 'Warm Joshs poptarts',
      status: 'Not Started',
      imageUrl:
        'https://target.scene7.com/is/image/Target/GUEST_43da0eb5-d310-4fc7-988f-1214ff5212a9?wid=488&hei=488&fmt=pjpeg',
    },
  ]);

  // // TODO: fetch user Uid from context/state
  // const userUid: UserUid = '51e151b4-b7e6-4c35-adcc-f91a3614ad9b';

  // useEffect(() => {
  //   fetchListViewCases(userUid).then(data => {
  //     setCases(data);
  //   });
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Link href="/QRCodeScanner" asChild>
          <TouchableOpacity>
            <View style={styles.circle}>
              <Text>Camera</Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.casesContainer}>
        <FlatList
          data={cases}
          renderItem={({ item }) => (
            <CaseCard
              id={item.id}
              title={item.title}
              status={item.status}
              imageUrl={item.imageUrl}
            />
          )}
          keyExtractor={item => String(item.id)}
        />
      </View>
    </View>
  );
}

export default CasesScreen;
