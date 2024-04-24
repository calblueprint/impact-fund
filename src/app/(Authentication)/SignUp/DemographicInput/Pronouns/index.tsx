import Checkbox from 'expo-checkbox';
import { router } from 'expo-router';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import BackButton from '../../../../../../assets/back-button-in-grey-circle.svg';
import ContinueArrow from '../../../../../../assets/right-arrow-white.svg';
import PressableRequirement from '../../../../../Components/PressableRequirement/PressableRequirement';
import { colors } from '../../../../../styles/colors';

export default function Pronouns() {
  const [isHe, setHe] = useState(false);
  const [isShe, setShe] = useState(false);
  const [isThey, setThey] = useState(false);
  const [isOther, setOther] = useState(false);
  const [isPreferNot, setPreferNot] = useState(false);
  const options = [
    'he/him',
    'she/her',
    'they/them',
    'Other: _______',
    'Prefer not to say',
  ];
  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <BackButton />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Optional questions:</Text>
          <Text style={styles.titleText}>What are your pronouns?</Text>
        </View>
        <View style={styles.pronounsContainer}>
          <TouchableOpacity onPress={() => setHe(!isHe)}>
            <Checkbox value={isHe} color={colors.darkGrey} />
            <Text>hi</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.buttonText}>Continue</Text>
          <ContinueArrow />
        </TouchableOpacity>
      </View>
    </View>
  );
}
