import { router, useLocalSearchParams } from 'expo-router';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';

import styles from './styles';
import { uploadCase } from '../../../../../supabase/queries/cases';
import { Case } from '../../../../../types/types';
import { formatDate } from '../../utils';

function AddCase() {
  const { id, title, imageUrl, date, lawFirm, summary } =
    useLocalSearchParams() as unknown as Case;
  const addToCases = async () => {
    uploadCase(id);
    router.push('/Cases');
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
