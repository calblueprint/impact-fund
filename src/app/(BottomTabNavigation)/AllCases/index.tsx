import { router, useLocalSearchParams, useNavigation } from 'expo-router';
import React, { useContext, useEffect } from 'react';
import { FlatList, Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';
import { getStatusColor } from './utils';
import Camera from '../../../../assets/camera.svg';
import CaseCard from '../../../Components/CaseCard/CaseCard';
import { CaseContext } from '../../../context/CaseContext';
import { CaseUid } from '../../../types/types';

function CasesScreen() {
  //const { allCases } = useContext(CaseContext);
  const { caseUid } = useLocalSearchParams<{ caseUid: CaseUid }>();
  const navigation = useNavigation();
  const { activeCases, loading } = useContext(CaseContext);
  const { inactiveCases } = useContext(CaseContext);

  useEffect(() => {
    navigation.addListener('focus', async () => {
      if (caseUid !== undefined) {
        getStatusColor(caseUid);
      }
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.casesContainer}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            contentContainerStyle={styles.innerScroll}
            ListHeaderComponent={() => (
              <>
                <View style={styles.headerContainer}>
                  <Text style={styles.titleText}>My Cases</Text>
                </View>
                <TouchableOpacity
                  onPress={() => router.push('/AllCases/QRCodeScanner')}
                  style={styles.cameraContainer}
                >
                  <View style={styles.buttonInfoContainer}>
                    <Camera />
                    <Text style={styles.cameraText}>Add Case with QR code</Text>
                  </View>
                </TouchableOpacity>
                <View>
                  <Text style={{ fontSize: 20, marginTop: 20 }}>
                    Active Cases
                  </Text>
                </View>
              </>
            )}
            data={activeCases}
            renderItem={({ item }) => <CaseCard {...item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Text>Scan your first case using the QR code above!</Text>
            }
          />
        )}
        {loading ? (
          <Text> </Text>
        ) : (
          <FlatList
            contentContainerStyle={styles.innerScroll}
            ListHeaderComponent={() => (
              <>
                <Text style={{ fontSize: 20, marginTop: 0 }}>
                  Inactive Cases
                </Text>
              </>
            )}
            data={inactiveCases}
            renderItem={({ item }) => <CaseCard {...item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
}

export default CasesScreen;
