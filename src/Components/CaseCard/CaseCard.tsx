import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import { fetchImageUrl } from '../../app/(BottomTabNavigation)/Cases/utils';
import { Case } from '../../types/types';

function CaseCard(caseData: Case) {
  const [imageUri, setImageUri] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      const uri = await fetchImageUrl(caseData.id);
      setImageUri(uri);
    };
    fetchImage();
  }, []);
  console.log(imageUri);

  return (
    <TouchableOpacity
      style={styles.caseCard}
      onPress={() =>
        router.push({
          pathname: `/Cases/CaseScreen`,
          params: {
            id: caseData.id,
            approved: caseData.approved,
            title: caseData.title,
            blurb: caseData.blurb,
            summary: caseData.summary,
            caseSite: caseData.caseSite,
            claimLink: caseData.claimLink,
            optOutLink: caseData.optOutLink,
            caseStatus: caseData.caseStatus,
            date: caseData.date,
            lawFirm: caseData.lawFirm,
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
          uri: imageUri,
        }}
      />
    </TouchableOpacity>
  );
}

export default CaseCard;
