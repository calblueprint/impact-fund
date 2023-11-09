import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { getImageUrl } from '../../supabase/queries/cases';
import { Case } from '../../types/types';

function CaseCard(caseData: Case) {
  const [imageUri, setImageUri] = useState<string>();

  useEffect(() => {
    const fetchImage = async () => {
      const uri = await getImageUrl(caseData.id);
      setImageUri(uri);
    };
    fetchImage();
  }, []);

  return (
    <TouchableOpacity
      style={styles.caseCard}
      onPress={() =>
        router.push({
          pathname: `/Cases/CaseScreen`,
          params: {
            ...caseData,
          },
        })
      }
    >
      <View style={styles.infoContainer}>
        <Text style={styles.titleText} adjustsFontSizeToFit>
          {caseData.title}
        </Text>
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>{caseData.caseStatus}</Text>
        </View>
      </View>
      <Image
        style={styles.imagePlaceholder}
        source={{
          uri: caseData.imageUrl,
        }}
      />
    </TouchableOpacity>
  );
}

export default CaseCard;
