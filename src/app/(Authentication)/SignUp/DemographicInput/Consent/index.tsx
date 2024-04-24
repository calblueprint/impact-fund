import { router } from 'expo-router';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import BackButton from '../../../../../../assets/back-button-in-grey-circle.svg';
import Check from '../../../../../../assets/circle-check-white.svg';
import Exclamation from '../../../../../../assets/exclamation-grey.svg';
import Nah from '../../../../../../assets/x.svg';
export default function Consent() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <View style={styles.smallerContentContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <BackButton />
          </TouchableOpacity>
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleText}>Consent for Communication</Text>
          </View>
          <View style={styles.instructionContainer}>
            <Exclamation />
            <Text style={styles.instructionText}>
              Do we have your consent to allow this app and any associated law
              firms to contact you regarding class actions, updates and related
              information?
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.smallerButtonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => router.back()}>
            <Nah />
            <Text style={[styles.buttonText, styles.declineButtonText]}>
              Decline
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.smallerButtonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.acceptButton]}
            onPress={() =>
              router.push('(Authentication)/SignUp/DemographicInput/Pronouns')
            }
          >
            <Check />
            <Text style={[styles.buttonText, styles.acceptButtonText]}>
              Accept
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
