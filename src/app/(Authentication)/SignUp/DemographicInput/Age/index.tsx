import Checkbox from 'expo-checkbox';
import { router } from 'expo-router';
import { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import BackButton from '../../../../../../assets/back-button-in-grey-circle.svg';
import ContinueArrow from '../../../../../../assets/right-arrow-white.svg';
import { colors } from '../../../../../styles/colors';

export default function Age() {
  const [isHe, setHe] = useState(false);
  const [isShe, setShe] = useState(false);
  const [isThey, setThey] = useState(false);
  const [isOther, setOther] = useState(false);
  const [isPreferNot, setPreferNot] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <BackButton />
        </TouchableOpacity>
        <Text style={styles.titleText}>Optional questions:</Text>
        <Text style={styles.titleText}>What is your age cohort?</Text>
        <View style={styles.instructionTextContainer}>
          <Text style={styles.instructionText}>
            While not always necessary, it may be relevant in certain class
            actions.
          </Text>
        </View>
        <View style={styles.pronounsContainer}>
          <TouchableOpacity
            onPress={() => setHe(!isHe)}
            style={styles.pronounSelectButton}
          >
            <Checkbox value={isHe} color={colors.darkGrey} />
            <Text style={styles.selectText}>he/him</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShe(!isShe)}
            style={styles.pronounSelectButton}
          >
            <Checkbox value={isShe} color={colors.darkGrey} />
            <Text style={styles.selectText}>she/her</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setThey(!isThey)}
            style={styles.pronounSelectButton}
          >
            <Checkbox value={isThey} color={colors.darkGrey} />
            <Text style={styles.selectText}>they/them</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setOther(!isOther)}
            style={styles.pronounSelectButton}
          >
            <Checkbox value={isOther} color={colors.darkGrey} />
            <Text style={styles.selectText}>Other: ____________________</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setPreferNot(!isPreferNot)}
            style={styles.pronounSelectButton}
          >
            <Checkbox value={isPreferNot} color={colors.darkGrey} />
            <Text style={styles.selectText}>Prefer not to say</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() =>
            router.push('(Authentication)/SignUp/DemographicInput/Age')
          }
        >
          <Text style={styles.buttonText}>Continue</Text>
          <ContinueArrow />
        </TouchableOpacity>
      </View>
    </View>
  );
}
