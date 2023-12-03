import { router } from 'expo-router';
import React, { useContext } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';
import Camera from '../../../../assets/camera.svg';
import CaseCard from '../../../Components/CaseCard/CaseCard';
import { CaseContext } from '../../../context/CaseContext';

function CasesScreen() {
  const { allCases, loading } = useContext(CaseContext);
  const noCasesExist = !loading && allCases.length === 0;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ marginTop: 58, marginBottom: 15 }}>
          <Text style={styles.caseText}>My Cases</Text>
        </View>
        <TouchableOpacity
          onPress={() => router.push('/AllCases/QRCodeScanner')}
        >
          <View style={styles.camera}>
            <Camera />
            <Text style={styles.cameraText}>Add Case with QR code</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.casesContainer}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            {noCasesExist ? (
              <Text>Scan your first case using the QR code above!</Text>
            ) : (
              <FlatList
                data={allCases}
                renderItem={({ item }) => <CaseCard {...item} />}
                keyExtractor={item => item.id}
              />
            )}
          </>
        )}
      </View>
    </View>
  );
}

export default CasesScreen;
