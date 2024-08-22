import React from 'react';
import { FlatList, Text, View } from 'react-native';

import styles from './styles';
import CaseCard from '../../../Components/CaseCard/CaseCard';
import ScreenLoadingComponent from '../../../Components/ScreenLoadingComponent/ScreenLoadingComponent';
import { useCaseContext } from '../../../context/CaseContext';
import { fonts } from '../../../styles/fonts';
import { device } from '../../../styles/global';

import 'react-native-url-polyfill/auto';

function CasesScreen() {
  const { allCases, loading } = useCaseContext();

  return (
    <View style={device.safeArea}>
      <View style={styles.casesContainer}>
        {loading ? (
          <ScreenLoadingComponent />
        ) : (
          <FlatList
            contentContainerStyle={styles.innerScroll}
            ListHeaderComponent={() => (
              <>
                <View style={styles.headerContainer}>
                  <Text style={fonts.tabHeading}>My Cases</Text>
                </View>
              </>
            )}
            data={allCases}
            renderItem={({ item }) => <CaseCard {...item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              <Text style={fonts.greyBody}>
                No cases? Scan a QR code or ask a friend to share one.
              </Text>
            }
          />
        )}
      </View>
    </View>
  );
}

export default CasesScreen;
