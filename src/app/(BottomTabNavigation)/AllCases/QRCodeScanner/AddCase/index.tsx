import { router, useLocalSearchParams } from 'expo-router';
import { useContext } from 'react';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';

import styles from './styles';
import { CaseContext } from '../../../../../context/CaseContext';
import { getCaseById, uploadCase } from '../../../../../supabase/queries/cases';
import { formatDate } from '../../utils';

function AddCase() {
  const { allCases, updateCases } = useContext(CaseContext);
  const { id, title, imageUrl, date, lawFirm, summary } =
    useLocalSearchParams() as unknown as {
      id: string;
      title: string;
      imageUrl: string;
      date: Date;
      lawFirm: string;
      summary: string;
    };

  const addToCases = async () => {
    await uploadCase(id);
    const newCase = await getCaseById(id);
    updateCases([...allCases, newCase]);
    router.push('/AllCases');
  };

  return (
    <View style={{ height: '100%' }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          justifyContent: 'flex-start',
        }}
        showsVerticalScrollIndicator={false}
      >
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.title}>{title}</Text>
        <View style={styles.dateAndFirm}>
          <Text style={styles.dateAndFirmText}>
            {formatDate(date)} • {lawFirm}
          </Text>
        </View>
        <Text style={styles.blurb}>{summary}</Text>
        <TouchableOpacity onPress={addToCases} style={styles.button}>
          <Text>ADD TO CASES</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.back()} style={styles.button}>
          <Text>CANCEL</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default AddCase;
